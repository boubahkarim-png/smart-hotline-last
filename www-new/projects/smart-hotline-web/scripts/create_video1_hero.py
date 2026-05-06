#!/usr/bin/env python3.11
"""
Video 1: Smart Hotline Hero Introduction
Professional promotional video with animations, text overlays, and transitions
"""

from moviepy.editor import (
    ImageClip, TextClip, CompositeVideoClip, ColorClip, 
    concatenate_videoclips, AudioFileClip
)
from moviepy.video.fx.all import fadein, fadeout, resize
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

# Paths
BASE_DIR = "/root/projects/smart-hotline-nextjs"
IMAGES_DIR = f"{BASE_DIR}/public/images"
OUTPUT_DIR = f"{BASE_DIR}/public/videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Video settings
WIDTH, HEIGHT = 1920, 1080
FPS = 30
DURATION = 30  # 30 seconds

def create_gradient_background(width, height, color1, color2, duration):
    """Create animated gradient background"""
    def make_frame(t):
        progress = t / duration
        img = Image.new('RGB', (width, height))
        draw = ImageDraw.Draw(img)
        for y in range(height):
            r = int(color1[0] + (color2[0] - color1[0]) * (y / height))
            g = int(color1[1] + (color2[1] - color1[1]) * (y / height))
            b = int(color1[2] + (color2[2] - color1[2]) * (y / height))
            draw.line([(0, y), (width, y)], fill=(r, g, b))
        return np.array(img)
    
    return ImageClip(make_frame, duration=duration).set_fps(FPS)

def create_text_clip(text, fontsize=80, color='white', duration=3, position='center'):
    """Create animated text clip with fade"""
    txt = TextClip(
        text, 
        fontsize=fontsize, 
        color=color, 
        font='DejaVu-Sans-Bold',
        method='caption',
        size=(WIDTH - 200, None),
        align='center'
    )
    txt = txt.set_duration(duration).set_position(position)
    txt = fadein(txt, 0.5)
    txt = fadeout(txt, 0.5)
    return txt

def create_image_clip(image_path, duration=4, zoom_effect=True):
    """Create image clip with optional Ken Burns effect"""
    if not os.path.exists(image_path):
        print(f"Image not found: {image_path}")
        return None
    
    img = ImageClip(image_path)
    img = resize(img, newsize=(WIDTH, HEIGHT))
    img = img.set_duration(duration)
    
    if zoom_effect:
        # Ken Burns zoom effect
        def zoom_effect_func(get_frame, t):
            frame = get_frame(t)
            zoom = 1 + 0.05 * t / duration  # Slow zoom in
            new_size = (int(WIDTH * zoom), int(HEIGHT * zoom))
            pil_img = Image.fromarray(frame)
            pil_img = pil_img.resize(new_size, Image.Resampling.LANCZOS)
            # Center crop
            left = (new_size[0] - WIDTH) // 2
            top = (new_size[1] - HEIGHT) // 2
            pil_img = pil_img.crop((left, top, left + WIDTH, top + HEIGHT))
            return np.array(pil_img)
        
        img = img.fl(zoom_effect_func)
    
    img = fadein(img, 0.5)
    img = fadeout(img, 0.5)
    return img

def main():
    print("Creating Video 1: Hero Introduction...")
    
    clips = []
    
    # Scene 1: Dark blue gradient background with logo reveal (0-4s)
    print("Scene 1: Logo reveal...")
    bg1 = create_gradient_background(WIDTH, HEIGHT, (15, 23, 42), (30, 58, 138), 4)
    text1 = create_text_clip("SMART HOTLINE", fontsize=100, color='#F59E0B', duration=4, position='center')
    scene1 = CompositeVideoClip([bg1, text1])
    clips.append(scene1)
    
    # Scene 2: Main hero image with tagline (4-9s)
    print("Scene 2: Hero image...")
    hero_img = create_image_clip(f"{IMAGES_DIR}/main-hero.jpg", duration=5)
    if hero_img:
        text2 = create_text_clip("Votre Centre d'Appels\nà Montréal", fontsize=70, color='white', duration=5, position=('center', 0.2))
        scene2 = CompositeVideoClip([hero_img, text2])
        clips.append(scene2)
    
    # Scene 3: Services showcase (9-15s)
    print("Scene 3: Services...")
    services_img = create_image_clip(f"{IMAGES_DIR}/services-hero.jpg", duration=6)
    if services_img:
        text3 = create_text_clip("Réception d'appels\nTelemarketing\nSupport Client", fontsize=50, color='white', duration=6, position=('center', 0.15))
        scene3 = CompositeVideoClip([services_img, text3])
        clips.append(scene3)
    
    # Scene 4: Team/AI agents (15-21s)
    print("Scene 4: AI Agents...")
    agents_img = create_image_clip(f"{IMAGES_DIR}/agents-ia-hero.jpg", duration=6)
    if agents_img:
        text4 = create_text_clip("Conseillers Humains\n+ Intelligence Artificielle", fontsize=60, color='white', duration=6, position='center')
        scene4 = CompositeVideoClip([agents_img, text4])
        clips.append(scene4)
    
    # Scene 5: CTA with contact (21-30s)
    print("Scene 5: Call to action...")
    bg5 = create_gradient_background(WIDTH, HEIGHT, (15, 23, 42), (30, 58, 138), 9)
    text5a = create_text_clip("Appelez-nous", fontsize=80, color='white', duration=4, position=('center', 0.3))
    text5b = create_text_clip("+1 514 819-0559", fontsize=70, color='#F59E0B', duration=4, position=('center', 0.5))
    text5c = create_text_clip("www.smart-hotline.com", fontsize=50, color='white', duration=4, position=('center', 0.7))
    scene5 = CompositeVideoClip([bg5, text5a, text5b, text5c])
    clips.append(scene5)
    
    # Concatenate all clips
    print("Concatenating clips...")
    final = concatenate_videoclips(clips, method="compose")
    
    # Export
    output_path = f"{OUTPUT_DIR}/promo_hero_fr.mp4"
    print(f"Exporting to {output_path}...")
    final.write_videofile(
        output_path,
        fps=FPS,
        codec='libx264',
        audio=False,
        preset='medium',
        bitrate='5000k'
    )
    
    # Also export as webm for web
    output_webm = f"{OUTPUT_DIR}/promo_hero_fr.webm"
    print(f"Exporting to {output_webm}...")
    final.write_videofile(
        output_webm,
        fps=FPS,
        codec='libvpx-vp9',
        audio=False,
        bitrate='5000k'
    )
    
    print("Video 1 complete!")

if __name__ == "__main__":
    main()
