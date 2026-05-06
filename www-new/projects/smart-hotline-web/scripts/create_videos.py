#!/usr/bin/env python3.11
"""
Create promotional videos using PIL + ffmpeg directly
No ImageMagick dependency
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import subprocess
import os
import numpy as np
import shutil

BASE_DIR = "/root/projects/smart-hotline-nextjs"
IMAGES_DIR = f"{BASE_DIR}/public/images"
OUTPUT_DIR = f"{BASE_DIR}/public/videos"
TEMP_DIR = "/tmp/video_frames"
WIDTH, HEIGHT = 1920, 1080
FPS = 30

os.makedirs(OUTPUT_DIR, exist_ok=True)
shutil.rmtree(TEMP_DIR, ignore_errors=True)
os.makedirs(TEMP_DIR, exist_ok=True)

def get_font(size):
    """Get available font"""
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans.ttf",
    ]
    for path in font_paths:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def create_gradient_image(color1, color2):
    """Create gradient background"""
    img = Image.new('RGB', (WIDTH, HEIGHT))
    draw = ImageDraw.Draw(img)
    for y in range(HEIGHT):
        r = int(color1[0] + (color2[0] - color1[0]) * (y / HEIGHT))
        g = int(color1[1] + (color2[1] - color1[1]) * (y / HEIGHT))
        b = int(color1[2] + (color2[2] - color1[2]) * (y / HEIGHT))
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))
    return img

def draw_text_centered(draw, text, y_pos, font_size, color, bold=False):
    """Draw centered text"""
    font = get_font(font_size)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (WIDTH - text_width) // 2
    draw.text((x, y_pos), text, fill=color, font=font)

def add_ken_burns(img, frame_num, total_frames, zoom_start=1.0, zoom_end=1.05):
    """Add Ken Burns zoom effect"""
    progress = frame_num / total_frames
    zoom = zoom_start + (zoom_end - zoom_start) * progress
    new_w, new_h = int(WIDTH * zoom), int(HEIGHT * zoom)
    img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - WIDTH) // 2
    top = (new_h - HEIGHT) // 2
    return img_resized.crop((left, top, left + WIDTH, top + HEIGHT))

def create_fade(img, frame_num, total_frames, fade_in=True, fade_out=True):
    """Add fade in/out effect"""
    fade_frames = int(FPS * 0.5)
    if fade_in and frame_num < fade_frames:
        alpha = frame_num / fade_frames
        img = Image.blend(Image.new('RGB', (WIDTH, HEIGHT), 'black'), img, alpha)
    if fade_out and frame_num > total_frames - fade_frames:
        alpha = (total_frames - frame_num) / fade_frames
        img = Image.blend(Image.new('RGB', (WIDTH, HEIGHT), 'black'), img, alpha)
    return img

def generate_scene_frames(scene_name, duration, create_frame_func):
    """Generate frames for a scene"""
    total_frames = int(duration * FPS)
    for i in range(total_frames):
        frame = create_frame_func(i, total_frames)
        frame.save(f"{TEMP_DIR}/{scene_name}_{i:05d}.png", "PNG")
    return total_frames

def create_video_1():
    """Video 1: Hero Introduction - 30 seconds"""
    print("Creating Video 1: Hero Introduction...")
    
    scene_frames = []
    frame_idx = 0
    
    # Scene 1: Logo reveal (0-4s) - Dark gradient with logo
    print("  Scene 1: Logo reveal...")
    for i in range(4 * FPS):
        bg = create_gradient_image((15, 23, 42), (30, 58, 138))
        draw = ImageDraw.Draw(bg)
        # Animated text size
        scale = min(1.0, i / (2 * FPS))
        font_size = int(80 + 40 * scale)
        draw_text_centered(draw, "SMART HOTLINE", HEIGHT // 2 - font_size // 2, font_size, '#F59E0B')
        bg = create_fade(bg, i, 4 * FPS)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 2: Main hero with tagline (4-9s)
    print("  Scene 2: Hero image...")
    try:
        hero = Image.open(f"{IMAGES_DIR}/main-hero.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        hero = create_gradient_image((30, 58, 138), (59, 130, 246))
    
    for i in range(5 * FPS):
        frame = add_ken_burns(hero, i, 5 * FPS, 1.0, 1.05)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Votre Centre d'Appels", HEIGHT // 4, 60, 'white')
        draw_text_centered(draw, "à Montréal", HEIGHT // 4 + 80, 60, 'white')
        frame = create_fade(frame, i, 5 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 3: Services showcase (9-15s)
    print("  Scene 3: Services...")
    try:
        services = Image.open(f"{IMAGES_DIR}/services-hero.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        services = create_gradient_image((59, 130, 246), (37, 99, 235))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(services, i, 6 * FPS, 1.0, 1.05)
        draw = ImageDraw.Draw(frame)
        y = HEIGHT // 4
        for text in ["Réception d'appels 24/7", "Télémarketing Pro", "Support Client"]:
            draw_text_centered(draw, text, y, 45, 'white')
            y += 70
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 4: AI Agents (15-21s)
    print("  Scene 4: AI Agents...")
    try:
        agents = Image.open(f"{IMAGES_DIR}/agents-ia-hero.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        agents = create_gradient_image((16, 185, 129), (5, 150, 105))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(agents, i, 6 * FPS, 1.0, 1.05)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Conseillers Humains", HEIGHT // 3, 55, 'white')
        draw_text_centered(draw, "+ Intelligence Artificielle", HEIGHT // 3 + 80, 55, '#F59E0B')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 5: CTA (21-30s)
    print("  Scene 5: Call to action...")
    for i in range(9 * FPS):
        bg = create_gradient_image((245, 158, 11), (220, 38, 38))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "Appelez-nous!", HEIGHT // 4, 70, 'white')
        draw_text_centered(draw, "+1 514 819-0559", HEIGHT // 4 + 100, 65, 'white')
        draw_text_centered(draw, "www.smart-hotline.com", HEIGHT // 4 + 200, 45, 'white')
        bg = create_fade(bg, i, 9 * FPS, fade_in=True, fade_out=False)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Encode video
    print("  Encoding video...")
    subprocess.run([
        'ffmpeg', '-y', '-framerate', str(FPS),
        '-i', f'{TEMP_DIR}/frame_%05d.png',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
        '-pix_fmt', 'yuv420p',
        f'{OUTPUT_DIR}/promo_hero_fr.mp4'
    ], check=True, capture_output=True)
    
    # Also create webm
    subprocess.run([
        'ffmpeg', '-y', '-i', f'{OUTPUT_DIR}/promo_hero_fr.mp4',
        '-c:v', 'libvpx-vp9', '-b:v', '5M',
        f'{OUTPUT_DIR}/promo_hero_fr.webm'
    ], check=True, capture_output=True)
    
    # Cleanup
    for f in os.listdir(TEMP_DIR):
        os.remove(f"{TEMP_DIR}/{f}")
    
    print("  Video 1 complete!")

def create_video_2():
    """Video 2: Services Showcase - 35 seconds"""
    print("Creating Video 2: Services Showcase...")
    
    frame_idx = 0
    
    # Scene 1: Title card
    print("  Scene 1: Title...")
    for i in range(4 * FPS):
        bg = create_gradient_image((15, 23, 42), (30, 58, 138))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "NOS SERVICES", HEIGHT // 2 - 40, 90, '#F59E0B')
        bg = create_fade(bg, i, 4 * FPS)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 2: Inbound - Reception
    print("  Scene 2: Inbound...")
    try:
        img = Image.open(f"{IMAGES_DIR}/reception-hero.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        img = create_gradient_image((59, 130, 246), (37, 99, 235))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(img, i, 6 * FPS)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Réception d'Appels 24/7", HEIGHT // 3, 55, 'white')
        draw_text_centered(draw, "Répondez à tous vos clients", HEIGHT // 3 + 80, 40, 'white')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 3: Telemarketing
    print("  Scene 3: Telemarketing...")
    try:
        img = Image.open(f"{IMAGES_DIR}/telemarketing.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        img = create_gradient_image((220, 38, 38), (185, 28, 28))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(img, i, 6 * FPS)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Télémarketing Pro", HEIGHT // 3, 55, 'white')
        draw_text_centered(draw, "Générez des leads qualifiés", HEIGHT // 3 + 80, 40, 'white')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 4: Support
    print("  Scene 4: Support...")
    try:
        img = Image.open(f"{IMAGES_DIR}/support-tech.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        img = create_gradient_image((16, 185, 129), (5, 150, 105))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(img, i, 6 * FPS)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Support Technique", HEIGHT // 3, 55, 'white')
        draw_text_centered(draw, "Assistance experte 24/7", HEIGHT // 3 + 80, 40, 'white')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 5: CTA
    print("  Scene 5: CTA...")
    for i in range(7 * FPS):
        bg = create_gradient_image((245, 158, 11), (234, 88, 12))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "Boostez votre entreprise", HEIGHT // 4, 60, 'white')
        draw_text_centered(draw, "DÉCOUVREZ NOS TARIFS", HEIGHT // 4 + 100, 55, 'white')
        draw_text_centered(draw, "smart-hotline.com/tarifs", HEIGHT // 4 + 180, 40, 'white')
        bg = create_fade(bg, i, 7 * FPS, fade_in=True, fade_out=False)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Encode
    print("  Encoding...")
    subprocess.run([
        'ffmpeg', '-y', '-framerate', str(FPS),
        '-i', f'{TEMP_DIR}/frame_%05d.png',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
        '-pix_fmt', 'yuv420p',
        f'{OUTPUT_DIR}/promo_services_fr.mp4'
    ], check=True, capture_output=True)
    
    subprocess.run([
        'ffmpeg', '-y', '-i', f'{OUTPUT_DIR}/promo_services_fr.mp4',
        '-c:v', 'libvpx-vp9', '-b:v', '5M',
        f'{OUTPUT_DIR}/promo_services_fr.webm'
    ], check=True, capture_output=True)
    
    # Cleanup
    for f in os.listdir(TEMP_DIR):
        os.remove(f"{TEMP_DIR}/{f}")
    
    print("  Video 2 complete!")

def create_video_3():
    """Video 3: Results & CTA - 35 seconds"""
    print("Creating Video 3: Results & CTA...")
    
    frame_idx = 0
    
    # Scene 1: Results intro
    print("  Scene 1: Intro...")
    for i in range(5 * FPS):
        bg = create_gradient_image((16, 185, 129), (5, 150, 105))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "NOS RÉSULTATS", HEIGHT // 2 - 40, 90, 'white')
        bg = create_fade(bg, i, 5 * FPS)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 2: Stats
    print("  Scene 2: Stats...")
    for i in range(7 * FPS):
        bg = create_gradient_image((15, 23, 42), (30, 58, 138))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "98% Satisfaction Client", HEIGHT // 4, 55, '#F59E0B')
        draw_text_centered(draw, "500+ Entreprises Nous Font Confiance", HEIGHT // 4 + 100, 45, 'white')
        draw_text_centered(draw, "+50 000 Appels Traités/Mois", HEIGHT // 4 + 170, 45, 'white')
        bg = create_fade(bg, i, 7 * FPS)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 3: Team
    print("  Scene 3: Team...")
    try:
        img = Image.open(f"{IMAGES_DIR}/team.webp").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        img = create_gradient_image((59, 130, 246), (37, 99, 235))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(img, i, 6 * FPS)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, '"Service impeccable,', HEIGHT // 3, 50, 'white')
        draw_text_centered(draw, 'clients satisfaits"', HEIGHT // 3 + 70, 50, 'white')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 4: Operators
    print("  Scene 4: Operators...")
    try:
        img = Image.open(f"{IMAGES_DIR}/operator-1.jpg").resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    except:
        img = create_gradient_image((245, 158, 11), (234, 88, 12))
    
    for i in range(6 * FPS):
        frame = add_ken_burns(img, i, 6 * FPS)
        draw = ImageDraw.Draw(frame)
        draw_text_centered(draw, "Nos Conseillers", HEIGHT // 3, 55, 'white')
        draw_text_centered(draw, "à Votre Service", HEIGHT // 3 + 80, 55, 'white')
        frame = create_fade(frame, i, 6 * FPS)
        frame.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Scene 5: Final CTA
    print("  Scene 5: Final CTA...")
    for i in range(11 * FPS):
        bg = create_gradient_image((245, 158, 11), (220, 38, 38))
        draw = ImageDraw.Draw(bg)
        draw_text_centered(draw, "PRÊT À DÉMARRER?", HEIGHT // 5, 70, 'white')
        draw_text_centered(draw, "Appelez le +1 514 819-0559", HEIGHT // 5 + 100, 60, 'white')
        draw_text_centered(draw, "ou visitez smart-hotline.com", HEIGHT // 5 + 180, 45, 'white')
        draw_text_centered(draw, "Essai Gratuit de 2 Semaines", HEIGHT // 5 + 260, 40, 'white')
        bg = create_fade(bg, i, 11 * FPS, fade_in=True, fade_out=False)
        bg.save(f"{TEMP_DIR}/frame_{frame_idx:05d}.png")
        frame_idx += 1
    
    # Encode
    print("  Encoding...")
    subprocess.run([
        'ffmpeg', '-y', '-framerate', str(FPS),
        '-i', f'{TEMP_DIR}/frame_%05d.png',
        '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
        '-pix_fmt', 'yuv420p',
        f'{OUTPUT_DIR}/promo_results_fr.mp4'
    ], check=True, capture_output=True)
    
    subprocess.run([
        'ffmpeg', '-y', '-i', f'{OUTPUT_DIR}/promo_results_fr.mp4',
        '-c:v', 'libvpx-vp9', '-b:v', '5M',
        f'{OUTPUT_DIR}/promo_results_fr.webm'
    ], check=True, capture_output=True)
    
    # Cleanup
    for f in os.listdir(TEMP_DIR):
        os.remove(f"{TEMP_DIR}/{f}")
    
    print("  Video 3 complete!")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        if sys.argv[1] == "1":
            create_video_1()
        elif sys.argv[1] == "2":
            create_video_2()
        elif sys.argv[1] == "3":
            create_video_3()
    else:
        create_video_1()
        create_video_2()
        create_video_3()
    
    print("\nAll videos created!")
    print(f"Output: {OUTPUT_DIR}")
    for f in os.listdir(OUTPUT_DIR):
        size = os.path.getsize(f"{OUTPUT_DIR}/{f}")
        print(f"  {f}: {size/1024/1024:.2f} MB")
