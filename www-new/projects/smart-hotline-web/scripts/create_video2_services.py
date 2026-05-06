#!/usr/bin/env python3.11
"""
Video 2: Smart Hotline Services Showcase
Features services with smooth transitions and professional animations
"""

from moviepy.editor import (
    ImageClip, TextClip, CompositeVideoClip, ColorClip,
    concatenate_videoclips
)
from moviepy.video.fx.all import fadein, fadeout, resize
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

# Paths
BASE_DIR = "/root/projects/smart-hotline-nextjs"
IMAGES_DIR = f"{BASE_DIR}/public/images"
OUTPUT_DIR = f"{BASE_DIR}/public/videos"

# Video settings
WIDTH, HEIGHT = 1920, 1080
FPS = 30

def create_gradient_bg(width, height, color1, color2):
    """Create static gradient"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * (y / height))
        g = int(color1[1] + (color2[1] - color1[1]) * (y / height))
        b = int(color1[2] + (color2[2] - color1[2]) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return np.array(img)

def make_text(text, fontsize=70, color='white', duration=4, pos='center'):
    """Create text clip"""
    txt = TextClip(
        text,
        fontsize=fontsize,
        color=color,
        font='DejaVu-Sans-Bold',
        method='caption',
        size=(WIDTH - 200, None),
        align='center'
    ).set_duration(duration).set_position(pos)
    return fadein(fadeout(txt, 0.3), 0.3)

def make_image(path, duration=5):
    """Create image clip with Ken Burns"""
    if not os.path.exists(path):
        return None
    img = ImageClip(path).resize(newsize=(WIDTH, HEIGHT)).set_duration(duration)
    
    # Zoom effect
    def zoom(get_frame, t):
        frame = get_frame(t)
        z = 1 + 0.03 * t / duration
        pil = Image.fromarray(frame).resize((int(WIDTH*z), int(HEIGHT*z)), Image.Resampling.LANCZOS)
        l, t_ = (pil.width - WIDTH)//2, (pil.height - HEIGHT)//2
        return np.array(pil.crop((l, t_, l+WIDTH, t_+HEIGHT)))
    
    img = img.fl(zoom)
    return fadein(fadeout(img, 0.5), 0.5)

def main():
    print("Creating Video 2: Services Showcase...")
    
    clips = []
    
    # Scene 1: Title card (0-4s)
    print("Scene 1: Title...")
    bg1 = ImageClip(create_gradient_bg(WIDTH, HEIGHT, (15, 23, 42), (30, 58, 138))).set_duration(4)
    title = make_text("NOS SERVICES", fontsize=90, color='#F59E0B', duration=4)
    clips.append(CompositeVideoClip([bg1, title]))
    
    # Scene 2: Inbound - Réception (4-10s)
    print("Scene 2: Inbound...")
    img2 = make_image(f"{IMAGES_DIR}/reception-hero.jpg", duration=6)
    if img2:
        txt2 = make_text("Réception d'Appels 24/7\nRépondez à tous vos clients", fontsize=55, color='white', duration=6)
        clips.append(CompositeVideoClip([img2, txt2]))
    
    # Scene 3: Outbound - Telemarketing (10-16s)
    print("Scene 3: Telemarketing...")
    img3 = make_image(f"{IMAGES_DIR}/telemarketing.jpg", duration=6)
    if img3:
        txt3 = make_text("Télémarketing Pro\nGénérez des leads qualifiés", fontsize=55, color='white', duration=6)
        clips.append(CompositeVideoClip([img3, txt3]))
    
    # Scene 4: Support Client (16-22s)
    print("Scene 4: Support...")
    img4 = make_image(f"{IMAGES_DIR}/support-tech.jpg", duration=6)
    if img4:
        txt4 = make_text("Support Technique\nAssistance experte 24/7", fontsize=55, color='white', duration=6)
        clips.append(CompositeVideoClip([img4, txt4]))
    
    # Scene 5: CRM Integration (22-28s)
    print("Scene 5: CRM...")
    img5 = make_image(f"{IMAGES_DIR}/crm-interface.jpg", duration=6)
    if img5:
        txt5 = make_text("Intégration CRM\nSuivi complet de vos clients", fontsize=55, color='white', duration=6)
        clips.append(CompositeVideoClip([img5, txt5]))
    
    # Scene 6: CTA (28-35s)
    print("Scene 6: CTA...")
    bg6 = ImageClip(create_gradient_bg(WIDTH, HEIGHT, (245, 158, 11), (234, 88, 12))).set_duration(7)
    txt6a = make_text("Boostez votre entreprise", fontsize=70, color='white', duration=7, pos=('center', 0.3))
    txt6b = make_text("DÉCOUVREZ NOS TARIFS", fontsize=60, color='white', duration=7, pos=('center', 0.55))
    txt6c = make_text("www.smart-hotline.com/tarifs", fontsize=45, color='white', duration=7, pos=('center', 0.75))
    clips.append(CompositeVideoClip([bg6, txt6a, txt6b, txt6c]))
    
    print("Concatenating...")
    final = concatenate_videoclips(clips, method="compose")
    
    # Export MP4
    output_mp4 = f"{OUTPUT_DIR}/promo_services_fr.mp4"
    print(f"Exporting {output_mp4}...")
    final.write_videofile(output_mp4, fps=FPS, codec='libx264', audio=False, preset='medium', bitrate='5000k')
    
    # Export WebM
    output_webm = f"{OUTPUT_DIR}/promo_services_fr.webm"
    print(f"Exporting {output_webm}...")
    final.write_videofile(output_webm, fps=FPS, codec='libvpx-vp9', audio=False, bitrate='5000k')
    
    print("Video 2 complete!")

if __name__ == "__main__":
    main()
