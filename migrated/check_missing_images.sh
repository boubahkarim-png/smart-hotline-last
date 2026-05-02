#!/bin/bash
echo "=== CHECKING FOR SPECIFIC MISSING IMAGES ==="
echo ""

# List of expected images based on HTML references
echo "Checking blog images (likely missing):"
for i in 1 2 3 4 5 6; do
    if [ -f "images/blog-$i.jpg" ]; then
        echo "  ✓ blog-$i.jpg exists"
    else
        echo "  ❌ blog-$i.jpg MISSING"
    fi
done

echo ""
echo "Checking other referenced images:"
missing_images=(
    "blog-1.jpg"
    "blog-2.jpg"
    "blog-3.jpg"
    "blog-4.jpg"
    "blog-5.jpg"
    "blog-6.jpg"
    "support-technique"  # This may be a directory link, not an image
)

for img in "${missing_images[@]}"; do
    if [ -f "images/$img" ]; then
        echo "  ✓ $img exists"
    else
        echo "  ❌ $img MISSING"
    fi
done

echo ""
echo "Images that DO exist but may have wrong filenames in HTML:"
existing=$(ls images/ | grep -E '\.(jpg|png|webp)$' | grep -v '.png.png')
for img in $existing; do
    echo "  ✓ $img"
done
