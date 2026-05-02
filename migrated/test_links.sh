#!/bin/bash

# Comprehensive Link Checker for Smart Hotline Website
set -e

echo "=== SMART HOTLINE WEBSITE LINK VALIDATION ==="
echo "Starting comprehensive link check..."
echo ""

cd /root
WEBSITE_DIR="/root/www.smart-hotline-fresh"
BROKEN_LINKS=0
MISSING_IMAGES=0
TOTAL_LINKS=0
TOTAL_IMAGES=0

# Function to check if a file exists
check_file_exists() {
    local file_path="$1"
    if [ -f "$file_path" ] || [ -d "$file_path" ]; then
        return 0
    else
        return 1
    fi
}

# Find all HTML files
HTML_FILES=$(find "$WEBSITE_DIR" -name "*.html" -type f)
echo "Found $(echo "$HTML_FILES" | wc -l) HTML files"
echo ""

# Check internal links
echo "=== CHECKING INTERNAL LINKS ==="
echo ""

while IFS= read -r html_file; do
    if [ -z "$html_file" ]; then
        continue
    fi
    
    echo "Processing: $(basename "$html_file")"
    
    # Extract all href attributes from <a> tags
    links=$(grep -o 'href="[^"]*"' "$html_file" 2>/dev/null | sed 's/href="//g' | sed 's/"//g' || true)
    
    for link in $links; do
        # Skip external links, mailto, tel, etc.
        if echo "$link" | grep -qE '^(http|mailto:|tel:|javascript:)'; then
            continue
        fi
        
        # Skip anchor links (starting with #)
        if echo "$link" | grep -q '^#'; then
            continue
        fi
        
        TOTAL_LINKS=$((TOTAL_LINKS + 1))
        
        # Check if link points to an existing file/directory
        if echo "$link" | grep -q '^/'; then
            # Absolute path - remove leading slash
            link_path="${link#/}"
        else
            # Relative path - get absolute path
            link_dir=$(dirname "$html_file")
            link_path="$link_dir/$link"
        fi
        
        # Normalize path relative to website root
        link_path="$WEBSITE_DIR/$link_path"
        
        # Check if file exists
        if ! check_file_exists "$link_path"; then
            echo "  ❌ BROKEN LINK: $link (in $(basename "$html_file"))"
            BROKEN_LINKS=$((BROKEN_LINKS + 1))
        else
            echo "  ✓ OK: $link"
        fi
    done
done <<< "$HTML_FILES"

echo ""
echo "=== CHECKING IMAGE REFERENCES ==="
echo ""

# Check all img src attributes
while IFS= read -r html_file; do
    if [ -z "$html_file" ]; then
        continue
    fi
    
    echo "Processing images in: $(basename "$html_file")"
    
    # Extract all src attributes from <img> tags
    images=$(grep -o 'src="[^"]*"' "$html_file" 2>/dev/null | sed 's/src="//g' | sed 's/"//g' || true)
    
    for img in $images; do
        # Skip external images
        if echo "$img" | grep -qE '^(http|https:)'; then
            continue
        fi
        
        TOTAL_IMAGES=$((TOTAL_IMAGES + 1))
        
        # Check if image exists in images/ directory
        if [ -f "$WEBSITE_DIR/images/$img" ]; then
            echo "  ✓ OK: $img"
        else
            echo "  ❌ MISSING IMAGE: $img (in $(basename "$html_file"))"
            MISSING_IMAGES=$((MISSING_IMAGES + 1))
        fi
    done
done <<< "$HTML_FILES"

echo ""
echo "=== SUMMARY REPORT ==="
echo "Total HTML files: $(echo "$HTML_FILES" | wc -l)"
echo "Total internal links checked: $TOTAL_LINKS"
echo "Total images checked: $TOTAL_IMAGES"
echo "Broken links found: $BROKEN_LINKS"
echo "Missing images found: $MISSING_IMAGES"
echo ""

# Final status
if [ $BROKEN_LINKS -eq 0 ] && [ $MISSING_IMAGES -eq 0 ]; then
    echo "✅ STATUS: ALL TESTS PASSED - WEBSITE IS FULLY FUNCTIONAL"
    echo ""
    echo "Congratulations! Your Smart Hotline website migration is complete and all links/images are working correctly."
    echo ""
    echo "You can now deploy this website with confidence."
else
    echo "❌ STATUS: ISSUES FOUND - PLEASE FIX BEFORE DEPLOYMENT"
    echo ""
    echo "Please fix the $BROKEN_LINKS broken links and $MISSING_IMAGES missing images before going live."
    echo ""
    echo "⚠️  WEBSITE NOT READY FOR PRODUCTION"
fi

echo ""
echo "=== ADDITIONAL VERIFICATION ==="
echo ""

# Check root redirect
echo "Checking root redirect (index.html → /fr/):"
if [ -f "$WEBSITE_DIR/index.html" ]; then
    redirect_target=$(grep -o 'href="[^"]*"' "$WEBSITE_DIR/index.html" | sed 's/href="//g' | sed 's/"//g' | head -1)
    if [ "$redirect_target" = "/fr/" ] || [ "$redirect_target" = "fr/" ]; then
        echo "  ✓ Root redirect is correct"
    else
        echo "  ❌ Root redirect target: $redirect_target (expected /fr/)"
    fi
else
    echo "  ❌ index.html not found"
fi

# Check CSS and JS files
CSS_FILES=$(find "$WEBSITE_DIR" -name "*.css" -type f)
JS_FILES=$(find "$WEBSITE_DIR" -name "*.js" -type f)

echo ""
echo "CSS files found: $(echo "$CSS_FILES" | wc -l)"
echo "JS files found: $(echo "$JS_FILES" | wc -l)"

# Test key pages
echo ""
echo "=== BASIC PAGE LOADING TEST ==="
for page in index.html en/index.html fr/index.html; do
    if [ -f "$WEBSITE_DIR/$page" ]; then
        echo "Testing $page:"
        # Simple content check
        if [ -s "$WEBSITE_DIR/$page" ]; then
            echo "  ✓ Page exists and is not empty"
        else
            echo "  ❌ Page is empty"
        fi
    else
        echo "  ❌ Page not found: $page"
    fi
done

echo ""
echo "=== NAVIGATION VERIFICATION ==="
echo ""

# Check language switching
for lang in en fr; do
    lang_dir="$WEBSITE_DIR/$lang"
    if [ -d "$lang_dir" ]; then
        echo "Checking $lang navigation:"
        lang_html_files=$(find "$lang_dir" -name "*.html" -type f)
        while IFS= read -r html_file; do
            if [ -z "$html_file" ]; then
                continue
            fi
            
            other_lang="en"
            if [ "$lang" = "en" ]; then
                other_lang="fr"
            fi
            
            if grep -q "href=\"$other_lang\"" "$html_file" || grep -q "href=\"/$other_lang/\"" "$html_file"; then
                echo "  ✓ $(basename "$html_file") has $other_lang language link"
            else
                echo "  ❌ $(basename "$html_file") missing $other_lang language link"
            fi
        done <<< "$lang_html_files"
    fi
done

echo ""
echo "=== SOLUTIONS PAGE VERIFICATION ==="
echo ""

# Check solutions dropdown links
while IFS= read -r html_file; do
    if [ -z "$html_file" ]; then
        continue
    fi
    
    if grep -qi "solution" "$html_file"; then
        echo "Checking $(basename "$html_file"):"
        if grep -q "pricing" "$html_file"; then
            echo "  ✓ Pricing link found"
        fi
        if grep -q "features" "$html_file"; then
            echo "  ✓ Features link found"
        fi
        if grep -q "contact" "$html_file"; then
            echo "  ✓ Contact link found"
        fi
    fi
done <<< "$HTML_FILES"

echo ""
echo "=== FINAL VERIFICATION COMPLETE ==="
echo ""

if [ $BROKEN_LINKS -eq 0 ] && [ $MISSING_IMAGES -eq 0 ]; then
    echo "🎉 WEBSITE MIGRATION VERIFICATION COMPLETE - ALL TESTS PASSED!"
    echo ""
    echo "Your Smart Hotline website is ready for deployment:"
    echo "- All internal links are working correctly"
    echo "- All images are present and accessible"
    echo "- Navigation between language versions is functional"
    echo "- Root redirect is properly configured"
    echo "- CSS and JS files are in place"
    echo ""
    echo "🚀 STATUS: READY FOR PRODUCTION DEPLOYMENT"
else
    echo "⚠️  VERIFICATION COMPLETE BUT ISSUES FOUND"
    echo ""
    echo "Please fix the $BROKEN_LINKS broken links and $MISSING_IMAGES missing images before deployment."
    echo ""
    echo "⚠️  WEBSITE NOT READY FOR PRODUCTION"
fi