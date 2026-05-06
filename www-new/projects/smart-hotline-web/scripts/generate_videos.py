#!/usr/bin/env python3.11
"""Video generation helper script for Smart Hotline promo videos.

Creates HTML generator page and scripts.json for video prompts.
Videos must be manually generated using free AI tools (Hailuo, Kling, Luma).
"""

import json
from pathlib import Path

BASE_DIR = Path("/root/projects/smart-hotline-nextjs")
PUBLIC_VIDEOS = BASE_DIR / "public" / "videos"
PROMO_DIR = PUBLIC_VIDEOS / "promo"
SAMPLES_DIR = PUBLIC_VIDEOS / "samples"

VIDEO_PROMPTS = [
    {
        "id": "promo-1-reception",
        "title": "Reception Desk Scene",
        "duration": "15s",
        "prompt": """Professional reception desk scene. A friendly bilingual receptionist (woman, 30s, professional attire) answers a phone call in a modern office. She smiles warmly, speaks briefly in French then English, takes notes efficiently. Soft natural lighting, corporate aesthetic. Camera slowly zooms in on her professional demeanor.""",
        "negative_prompt": "blurry, low quality, cartoon, anime, text overlay, watermark, logo, subtitles",
        "style": "corporate professional",
        "aspect_ratio": "16:9",
        "suggested_tools": ["Hailuo AI", "Kling AI", "Luma Dream Machine"],
        "output_filename": "reception-promo.mp4"
    },
    {
        "id": "promo-2-team",
        "title": "Team Collaboration Scene",
        "duration": "12s",
        "prompt": """Modern call center environment. Diverse team of 4 customer service agents (mixed gender, ages 25-45) working at ergonomic workstations with headsets. They type on computers, smile during calls, help each other. Bright office with plants and natural light. Steadicam movement capturing authentic teamwork.""",
        "negative_prompt": "blurry, low quality, cartoon, anime, text overlay, watermark, logo, crowded, chaotic",
        "style": "bright modern office",
        "aspect_ratio": "16:9",
        "suggested_tools": ["Hailuo AI", "Kling AI", "Luma Dream Machine"],
        "output_filename": "team-collab.mp4"
    },
    {
        "id": "promo-3-success",
        "title": "Client Success Moment",
        "duration": "10s",
        "prompt": """Business professional (man, 40s, suit) in bright modern office receives a call. His face lights up with satisfaction, he nods approvingly at the excellent service. He gestures thumbs up toward camera. Warm golden hour lighting through large windows. Celebratory professional atmosphere.""",
        "negative_prompt": "blurry, low quality, cartoon, anime, text overlay, watermark, logo, dark, gloomy",
        "style": "warm professional",
        "aspect_ratio": "16:9",
        "suggested_tools": ["Hailuo AI", "Kling AI", "Luma Dream Machine"],
        "output_filename": "client-success.mp4"
    }
]

def create_directories():
    PROMO_DIR.mkdir(parents=True, exist_ok=True)
    (BASE_DIR / "scripts").mkdir(parents=True, exist_ok=True)
    print(f"Created directory: {PROMO_DIR}")

def generate_scripts_json():
    output_path = PUBLIC_VIDEOS / "scripts.json"
    data = {
        "project": "Smart Hotline Agency",
        "version": "1.0.0",
        "generated_at": "2026-03-24",
        "videos": VIDEO_PROMPTS,
        "instructions": {
            "step_1": "Open generate.html in a browser",
            "step_2": "Copy prompts to your preferred AI video tool",
            "step_3": "Generate videos (Hailuo, Kling, or Luma)",
            "step_4": "Download generated videos to public/videos/promo/",
            "step_5": "Rename files to match output_filename in scripts.json"
        }
    }
    
    output_path.write_text(json.dumps(data, indent=2, ensure_ascii=False))
    print(f"Created: {output_path}")
    return output_path

def generate_html_page():
    html_content = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Hotline - Video Generation Helper</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            padding: 2rem;
            color: #fff;
        }
        h1 { text-align: center; margin-bottom: 2rem; color: #f59e0b; }
        .container { max-width: 1200px; margin: 0 auto; }
        .video-card {
            background: rgba(255,255,255,0.1);
            border-radius: 16px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            backdrop-filter: blur(10px);
        }
        .video-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .video-title { font-size: 1.25rem; font-weight: 600; }
        .video-duration { 
            background: #f59e0b; 
            color: #000; 
            padding: 0.25rem 0.75rem; 
            border-radius: 9999px; 
            font-size: 0.875rem;
            font-weight: 600;
        }
        .prompt-section { margin-bottom: 1rem; }
        .prompt-label { 
            font-size: 0.75rem; 
            text-transform: uppercase; 
            color: #94a3b8; 
            margin-bottom: 0.5rem; 
        }
        .prompt-text {
            background: rgba(0,0,0,0.3);
            border-radius: 8px;
            padding: 1rem;
            font-size: 0.9rem;
            line-height: 1.6;
            border-left: 3px solid #f59e0b;
        }
        .negative-prompt { border-left-color: #ef4444; }
        .tools { 
            display: flex; 
            gap: 0.5rem; 
            flex-wrap: wrap; 
            margin-top: 1rem; 
        }
        .tool-badge {
            background: rgba(255,255,255,0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 6px;
            font-size: 0.8rem;
        }
        .copy-btn {
            background: #f59e0b;
            color: #000;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 0.5rem;
            transition: all 0.2s;
        }
        .copy-btn:hover { background: #fbbf24; transform: scale(1.02); }
        .instructions {
            background: rgba(34, 197, 94, 0.2);
            border: 1px solid #22c55e;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        .instructions h2 { color: #22c55e; margin-bottom: 1rem; }
        .instructions ol { padding-left: 1.5rem; }
        .instructions li { margin-bottom: 0.5rem; }
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #22c55e;
            color: #000;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s;
        }
        .toast.show { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎬 Smart Hotline Video Generator</h1>
        
        <div class="instructions">
            <h2>📋 How to Generate Videos</h2>
            <ol>
                <li>Choose a video prompt below</li>
                <li>Click "Copy Prompt" to copy the text</li>
                <li>Go to <a href="https://hailuoai.com/video" target="_blank" style="color:#f59e0b">Hailuo AI</a>, 
                    <a href="https://klingai.com" target="_blank" style="color:#f59e0b">Kling AI</a>, or 
                    <a href="https://lumalabs.ai/dream-machine" target="_blank" style="color:#f59e0b">Luma Dream Machine</a></li>
                <li>Paste the prompt and generate your video</li>
                <li>Download and save as the specified filename in <code>public/videos/promo/</code></li>
            </ol>
        </div>
        
        <div id="videos-container"></div>
    </div>
    
    <div id="toast" class="toast">Copied to clipboard!</div>

    <script>
        const videos = """ + json.dumps(VIDEO_PROMPTS, ensure_ascii=False) + """;
        
        const container = document.getElementById('videos-container');
        
        videos.forEach((video, index) => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <div class="video-header">
                    <div class="video-title">${index + 1}. ${video.title}</div>
                    <div class="video-duration">${video.duration}</div>
                </div>
                
                <div class="prompt-section">
                    <div class="prompt-label">Main Prompt</div>
                    <div class="prompt-text" id="prompt-${index}">${video.prompt}</div>
                    <button class="copy-btn" onclick="copyPrompt(${index})">📋 Copy Prompt</button>
                </div>
                
                <div class="prompt-section">
                    <div class="prompt-label">Negative Prompt (avoid these)</div>
                    <div class="prompt-text negative-prompt">${video.negative_prompt}</div>
                </div>
                
                <div class="prompt-section">
                    <div class="prompt-label">Style: ${video.style} | Aspect: ${video.aspect_ratio}</div>
                </div>
                
                <div class="tools">
                    <span class="tool-badge">📁 Save as: ${video.output_filename}</span>
                    ${video.suggested_tools.map(t => `<span class="tool-badge">${t}</span>`).join('')}
                </div>
            `;
            container.appendChild(card);
        });
        
        function copyPrompt(index) {
            const prompt = videos[index].prompt;
            navigator.clipboard.writeText(prompt).then(() => {
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            });
        }
    </script>
</body>
</html>"""
    
    output_path = PUBLIC_VIDEOS / "generate.html"
    output_path.write_text(html_content)
    print(f"Created: {output_path}")
    return output_path

def main():
    print("=" * 60)
    print("Smart Hotline Video Generation Helper")
    print("=" * 60)
    
    create_directories()
    scripts_json = generate_scripts_json()
    html_page = generate_html_page()
    
    print("\n" + "=" * 60)
    print("FILES CREATED:")
    print("=" * 60)
    print(f"  1. {scripts_json}")
    print(f"  2. {html_page}")
    print(f"  3. {PROMO_DIR}/ (directory ready for videos)")
    print("\n" + "=" * 60)
    print("NEXT STEPS:")
    print("=" * 60)
    print("  1. Open generate.html in a browser")
    print("  2. Use prompts with AI video tools")
    print("  3. Save generated videos to public/videos/promo/")
    print("=" * 60)

if __name__ == "__main__":
    main()
