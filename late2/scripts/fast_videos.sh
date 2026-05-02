#!/bin/bash
# FAST video generator - simple slideshow with transitions
# No complex filters - much faster rendering

set -e
IMAGES_DIR="/root/projects/smart-hotline-nextjs/public/images"
VIDEOS_DIR="/root/projects/smart-hotline-nextjs/public/videos"
mkdir -p "$VIDEOS_DIR"
SEG_DIR="/tmp/vid_seg"
rm -rf "$SEG_DIR"
mkdir -p "$SEG_DIR"

echo "=== FAST VIDEO GENERATOR ==="

# Simple segment - no zoom, just scale and fade
fast_segment() {
    local img="$1"
    local dur="$2"
    local out="$3"
    
    if [ ! -f "$img" ]; then
        ffmpeg -y -f lavfi -i "color=c=#0f172a:s=1920x1080:d=$dur" -c:v libvpx-vp9 -b:v 3M -an "$out" 2>/dev/null
        return
    fi
    
    ffmpeg -y -loop 1 -i "$img" -t $dur \
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fade=t=in:st=0:d=0.3,fade=t=out:st=$((dur-1)):d=1" \
        -c:v libvpx-vp9 -b:v 3M -an "$out" 2>/dev/null
}

echo ""
echo "Video 1: Hero (22s)..."
for i in 1 2 3 4; do rm -f "$SEG_DIR/h$i.webm"; done
fast_segment "$IMAGES_DIR/main-hero.jpg" 5 "$SEG_DIR/h1.webm" &
fast_segment "$IMAGES_DIR/services-hero.jpg" 5 "$SEG_DIR/h2.webm" &
fast_segment "$IMAGES_DIR/agents-ia-hero.jpg" 5 "$SEG_DIR/h3.webm" &
fast_segment "$IMAGES_DIR/team.webp" 5 "$SEG_DIR/h4.webm" &
wait

# Simple concat (no xfade - just join)
cat "$SEG_DIR/h1.webm" "$SEG_DIR/h2.webm" "$SEG_DIR/h3.webm" "$SEG_DIR/h4.webm" > "$VIDEOS_DIR/promo_hero_fr.webm"
echo "✓ promo_hero_fr.webm"

echo ""
echo "Video 2: Services (25s)..."
for i in 1 2 3 4 5; do
    fast_segment "$IMAGES_DIR/reception-hero.jpg" 5 "$SEG_DIR/s1.webm" &
    fast_segment "$IMAGES_DIR/telemarketing.jpg" 5 "$SEG_DIR/s2.webm" &
    fast_segment "$IMAGES_DIR/support-tech.jpg" 5 "$SEG_DIR/s3.webm" &
    fast_segment "$IMAGES_DIR/crm-interface.jpg" 5 "$SEG_DIR/s4.webm" &
    fast_segment "$IMAGES_DIR/about-hero.jpg" 5 "$SEG_DIR/s5.webm" &
done
wait

cat "$SEG_DIR/s1.webm" "$SEG_DIR/s2.webm" "$SEG_DIR/s3.webm" "$SEG_DIR/s4.webm" "$SEG_DIR/s5.webm" > "$VIDEOS_DIR/promo_services_fr.webm"
echo "✓ promo_services_fr.webm"

echo ""
echo "Video 3: Results (18s)..."
fast_segment "$IMAGES_DIR/team.webp" 6 "$SEG_DIR/r1.webm" &
fast_segment "$IMAGES_DIR/operator-1.jpg" 6 "$SEG_DIR/r2.webm" &
fast_segment "$IMAGES_DIR/contact-hero.png" 6 "$SEG_DIR/r3.webm" &
wait

cat "$SEG_DIR/r1.webm" "$SEG_DIR/r2.webm" "$SEG_DIR/r3.webm" > "$VIDEOS_DIR/promo_results_fr.webm"
echo "✓ promo_results_fr.webm"

rm -rf "$SEG_DIR"

echo ""
echo "=== DONE ==="
ls -lh "$VIDEOS_DIR"/*.webm 2>/dev/null
