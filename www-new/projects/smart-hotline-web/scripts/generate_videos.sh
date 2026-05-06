#!/bin/bash
# Direct ffmpeg video generator - professional promotional videos

set -e

IMAGES_DIR="/root/projects/smart-hotline-nextjs/public/images"
VIDEOS_DIR="/root/projects/smart-hotline-nextjs/public/videos"
mkdir -p "$VIDEOS_DIR"
SEG_DIR="/tmp/video_segments"
rm -rf "$SEG_DIR"
mkdir -p "$SEG_DIR"

echo "=== SMART HOTLINE VIDEO GENERATOR ==="

# Function to create a video segment with Ken Burns effect
create_segment() {
    local image="$1"
    local duration="$2"
    local output="$3"
    
    if [ ! -f "$image" ]; then
        echo "  Warning: Image not found: $image"
        ffmpeg -y -f lavfi -i "color=c=#0f172a:s=1920x1080:d=$duration" \
            -c:v libvpx-vp9 -b:v 5M -an "$output" 2>/dev/null
        return
    fi
    
    echo "  Creating segment: $(basename $image)"
    # Ken Burns zoom with fade effects
    ffmpeg -y -loop 1 -i "$image" -t $duration \
        -vf "scale=2100:-1,zoompan=z='min(zoom+0.0015,1.08)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$((duration*30)):s=1920x1080,fade=t=in:st=0:d=0.5,fade=t=out:st=$((duration-1)):d=1" \
        -c:v libvpx-vp9 -b:v 5M -an "$output" 2>/dev/null
}

echo ""
echo "Creating Video 1: Hero Introduction..."

# Create segments in parallel
create_segment "$IMAGES_DIR/main-hero.jpg" 6 "$SEG_DIR/seg1.webm" &
create_segment "$IMAGES_DIR/services-hero.jpg" 5 "$SEG_DIR/seg2.webm" &
create_segment "$IMAGES_DIR/agents-ia-hero.jpg" 5 "$SEG_DIR/seg3.webm" &
create_segment "$IMAGES_DIR/team.webp" 6 "$SEG_DIR/seg4.webm" &
wait

# Concatenate with crossfade
ffmpeg -y \
    -i "$SEG_DIR/seg1.webm" \
    -i "$SEG_DIR/seg2.webm" \
    -i "$SEG_DIR/seg3.webm" \
    -i "$SEG_DIR/seg4.webm" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=5.5[v01]; \
                     [v01][2:v]xfade=transition=fade:duration=0.5:offset=10.5[v12]; \
                     [v12][3:v]xfade=transition=fade:duration=0.5:offset=15.5" \
    -c:v libvpx-vp9 -b:v 5M "$VIDEOS_DIR/promo_hero_fr.webm" 2>/dev/null

echo "✓ Video 1 created: promo_hero_fr.webm"

echo ""
echo "Creating Video 2: Services Showcase..."

create_segment "$IMAGES_DIR/reception-hero.jpg" 5 "$SEG_DIR/s1.webm" &
create_segment "$IMAGES_DIR/telemarketing.jpg" 5 "$SEG_DIR/s2.webm" &
create_segment "$IMAGES_DIR/support-tech.jpg" 5 "$SEG_DIR/s3.webm" &
create_segment "$IMAGES_DIR/crm-interface.jpg" 5 "$SEG_DIR/s4.webm" &
create_segment "$IMAGES_DIR/about-hero.jpg" 5 "$SEG_DIR/s5.webm" &
wait

ffmpeg -y \
    -i "$SEG_DIR/s1.webm" -i "$SEG_DIR/s2.webm" -i "$SEG_DIR/s3.webm" -i "$SEG_DIR/s4.webm" -i "$SEG_DIR/s5.webm" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=4.5[v01]; \
                     [v01][2:v]xfade=transition=fade:duration=0.5:offset=9[v12]; \
                     [v12][3:v]xfade=transition=fade:duration=0.5:offset=13.5[v23]; \
                     [v23][4:v]xfade=transition=fade:duration=0.5:offset=18" \
    -c:v libvpx-vp9 -b:v 5M "$VIDEOS_DIR/promo_services_fr.webm" 2>/dev/null

echo "✓ Video 2 created: promo_services_fr.webm"

echo ""
echo "Creating Video 3: Results & CTA..."

create_segment "$IMAGES_DIR/team.webp" 6 "$SEG_DIR/r1.webm" &
create_segment "$IMAGES_DIR/operator-1.jpg" 6 "$SEG_DIR/r2.webm" &
create_segment "$IMAGES_DIR/contact-hero.png" 6 "$SEG_DIR/r3.webm" &
wait

ffmpeg -y \
    -i "$SEG_DIR/r1.webm" -i "$SEG_DIR/r2.webm" -i "$SEG_DIR/r3.webm" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.5:offset=5.5[v01]; \
                     [v01][2:v]xfade=transition=fade:duration=0.5:offset=11" \
    -c:v libvpx-vp9 -b:v 5M "$VIDEOS_DIR/promo_results_fr.webm" 2>/dev/null

echo "✓ Video 3 created: promo_results_fr.webm"

# Cleanup
rm -rf "$SEG_DIR"

# Summary
echo ""
echo "=== SUMMARY ==="
ls -lh "$VIDEOS_DIR"/*.webm 2>/dev/null

echo ""
echo "✓ All videos created!"
