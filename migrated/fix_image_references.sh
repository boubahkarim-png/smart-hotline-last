#!/bin/bash
echo "=== FIXING IMAGE REFERENCES ==="
echo ""

# Fix blog image references - these don't exist, but we have other blog images
# Replace blog-1.jpg through blog-6.jpg with existing blog images
blog_images=("blog-1.jpg" "blog-2.jpg" "blog-3.jpg" "blog-4.jpg" "blog-5.jpg" "blog-6.jpg")
existing_blog_images=("blog-1.jpg" "blog-2.jpg" "blog-3.jpg" "blog-4.jpg" "blog-5.jpg" "blog-6.jpg")

# We'll use the existing blog images that are actually in the images directory
# Let's map them to existing files
existing_blog_mapping=(
    "blog-1.jpg=blog-1.jpg"  # These don't exist, so we need to find alternatives
    "blog-2.jpg=blog-2.jpg"
    "blog-3.jpg=blog-3.jpg"
    "blog-4.jpg=blog-4.jpg"
    "blog-5.jpg=blog-5.jpg"
    "blog-6.jpg=blog-6.jpg"
)

# Instead, let's use the actual blog images we have (blog-1.jpg doesn't exist, so we'll use existing ones)
# We'll replace with existing blog images or use a placeholder

# Fix team images - we have team-400.webp but HTML references team-1.jpg through team-4.jpg
# Let's create symbolic links or update references

echo "Fixing team images..."
for i in 1 2 3 4; do
    if [ -f "images/team-$i.jpg" ]; then
        echo "  team-$i.jpg already exists"
    else
        echo "  team-$i.jpg missing, using team-400.webp as fallback"
        # Update HTML references to use team-400.webp instead
        find . -name "*.html" -exec sed -i 's/team-\([1-4]\).jpg/team-400.webp/g' {} \;
    fi
done

# Fix blog images - we don't have blog-1.jpg through blog-6.jpg, so let's use existing blog images
# We'll use the existing blog images that are in the images directory
existing_blog_files=$(ls images/ | grep -E '^blog-.*\.jpg$')
if [ -n "$existing_blog_files" ]; then
    echo "Found existing blog images: $existing_blog_files"
    # Update HTML references to use existing blog images
    for blog_img in $existing_blog_files; do
        find . -name "*.html" -exec sed -i "s/blog-[1-6].jpg/$blog_img/g" {} \;
    done
else
    echo "No existing blog images found, will use placeholder"
    # Use a default blog image if available
    if [ -f "images/main-hero.jpg" ]; then
        find . -name "*.html" -exec sed -i 's/blog-[1-6].jpg/main-hero.jpg/g' {} \;
    fi
fi

echo ""
echo "=== VERIFICATION AFTER FIXES ==="
echo ""

# Verify fixes
missing_after_fix=0
for html_file in $(find . -name "*.html" -type f); do
    images=$(grep -o 'src="[^"]*"' "$html_file" | sed 's/src="//g' | sed 's/"//g' | grep -v '^http')
    for img in $images; do
        if echo "$img" | grep -q '\.jpg\|\.png\|\.webp' && ! echo "$img" | grep -q '^/images/'; then
            if ! [ -f "images/$img" ]; then
                echo "  ❌ $html_file: $img still missing"
                missing_after_fix=$((missing_after_fix + 1))
            fi
        fi
    done
done

echo ""
echo "=== FINAL SUMMARY ==="
echo "Missing images after fixes: $missing_after_fix"
echo ""

if [ $missing_after_fix -eq 0 ]; then
    echo "✅ IMAGE REFERENCES FIXED SUCCESSFULLY!"
    echo ""
    echo "All image references now point to existing files."
else
    echo "⚠️  STILL HAVE ISSUES: $missing_after_fix missing images"
    echo ""
    echo "Please manually fix the remaining missing image references."
fi
