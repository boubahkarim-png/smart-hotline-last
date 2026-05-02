#!/usr/bin/env python3.11
"""
Video 3: Results & Testimonials
Shows client results and final CTA
"""

from moviepy.editor import (
    ImageClip, TextClip, CompositeVideoClip,
    concatenate_videoclips
)
from moviepy.video.fx.all import fadein, fadeout, resize
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

BASE_DIR = "/root/projects/smart-hotline-nextjs"
IMAGES_DIR = f"{BASE_DIR}/public/images"
OUTPUT_DIR = f"{BASE_DIR}/public/videos"

WIDTH, HEIGHT = 1920, 1080
FPS = 30

def create_gradient_bg(width, height, color1, color2):
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * (y / height))
        g = int(color1[1] + (color2[1] - color1[1]) * (y / height))
        b = int(color1[2] + (color2[2] - color1[2]) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return np.array(img)

def make_text(text, fontsize=70, color='white', duration=4, pos='center'):
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
    if not os.path.exists(path):
        return None
    img = ImageClip(path).resize(newsize=(WIDTH, HEIGHT)).set_duration(duration)
    def zoom(get_frame, t):
        frame = get_frame(t)
        z = 1 + 0.03 * t / duration
        pil = Image.fromarray(frame).resize((int(WIDTH*z), int(HEIGHT*z)), Image.Resampling.LANCZOS)
        l, t_ = (pil.width - WIDTH)//2, (pil.height - HEIGHT)//2
        return np.array(pil.crop((l, t_, l+WIDTH, t_+HEIGHT)))
    img = img.fl(zoom)
    return fadein(fadeout(img, 0.5), 0.5)

def main():
    print("Creating Video 3: Results & CTA...")
    
    clips = []
    
    # Scene 1: Results intro (0-5s)
    print("Scene 1: Results intro...")
    bg1 = ImageClip(create_gradient_bg(WIDTH, HEIGHT, (16, 185, 129), (5, 150, 105))).set_duration(5)
    txt1 = make_text("NOS RÉSULTATS", fontsize=90, color='white', duration=5)
    clips.append(CompositeVideoClip([bg1, txt1]))
    
    # Scene 2: Stats (5-12s)
    print("Scene 2: Stats...")
    bg2 = ImageClip(create_gradient_bg(WIDTH, HEIGHT, (15, 23, 42), (30, 58, 138))).set_duration(7)
    txt2a = make_text("98% Satisfaction Client", fontsize=65, color='#F59E0B', duration=7, pos=('center', 0.2))
    txt2b = make_text("500+ Entreprises Nous Font Confiance", fontsize=55, color='white', duration=7, pos=('center', 0.45))
    txt2c = make_text("+50 000 Appels Traités/Mois", fontsize=55, color='white', duration=7, pos=('center', 0.65))
    clips.append(CompositeVideoClip([bg2, txt2a, txt2b, txt2c]))
    
    # Scene 3: Team testimonial (12-18s)
    print("Scene 3: Team...")
    img3 = make_image(f"{IMAGES_DIR}/team.webp", duration=6)
    if img3:
        txt3 = make_text("\"Service impeccable,\nclients satisfaits\"", fontsize=50, color='white', duration=6)
        clips.append(CompositeVideoClip([img3, txt3]))
    
    # Scene 4: Operator showcase (18-24s)
    print("Scene 4: Operators...")
    img4 = make_image(f"{IMAGES_DIR}/operator-1.jpg", duration=6)
    if img4:
        txt4 = make_text("Nos Conseillers à Votre Service", fontsize=55, color='white', duration=6)
        clips.append(CompositeVideoClip([img4, txt4]))
    
    # Scene 5: Final CTA (24-35s)
    print("Scene 5: Final CTA...")
    bg5 = ImageClip(create_gradient_bg(WIDTH, HEIGHT, (245, 158, 11), (220, 38, 38))).set_duration(11)
    txt5a = make_text("PRÊT À DÉMARRER?", fontsize=80, color='white', duration=11, pos=('center', 0.2))
    txt5b = make_text("Appelez le +1 514 819-0559", fontsize=65, color='white', duration=11, pos=('center', 0.45))
    txt5c = make_text("ou visitez smart-hotline.com", fontsize=50, color='white', duration=11, pos=('center', 0.65))
    txt5d = make_text("Essai Gratuit de 2 Semaines", fontsize=45, color='white', duration=11, pos=('center', 0.82))
    clips.append(CompositeVideoClip([bg5, txt5a, txt5b, txt5c, txt5d]))
    
    print("Concatenating...")
    final = concatenate_videoclips(clips, method="compose")
    
    # Export
    output_mp4 = f"{OUTPUT_DIR}/promo_results_fr.mp4"
    print(f"Exporting {output_mp4}...")
    final.write_videofile(output_mp4, fps=FPS, codec='libx264', audio=False, preset='medium', bitrate='5000k')
    
    output_webm = f"{OUTPUT_DIR}/promo_results_fr.webm"
    print(f"Exporting {output_webm}...")
    final.write_videofile(output_webm, fps=FPS, codec='libvpx-vp9', audio=False, bitrate='5000k')
    
    print("Video 3 complete!")

if __name__ == "__main__":
    main()
