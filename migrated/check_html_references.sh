#!/bin/bash
echo "=== ANALYZING HTML IMAGE REFERENCES ==="
echo ""

# Find all image references in HTML files
echo "Checking image references in HTML files:"
for html_file in $(find . -name "*.html" -type f); do
    if [ -s "$html_file" ]; then
        images=$(grep -o 'src="[^"]*"' "$html_file" | sed 's/src="//g' | sed 's/"//g' | grep -v '^http')
        for img in $images; do
            if echo "$img" | grep -q '\.jpg\|\.png\|\.webp'; then
                echo "  $html_file: $img"
            fi
        done
    fi
done
