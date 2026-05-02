#!/bin/bash

# Comprehensive Link Checker for Smart Hotline Website - FINAL VERSION
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

echo "Website directory: $WEBSITE_DIR"
echo ""

# Find all HTML files
HTML_FILES=$(find "$WEBSITE_DIR" -name "*.html" -type f)
HTML_COUNT=$(echo "$HTML_FILES" | wc -l)
echo "Found $HTML_COUNT HTML files"
echo ""

# Function to normalize and check a path
check_path() {
    local path="$1"
    local base_dir="$WEBSITE_DIR"
    
    # Remove leading slash for absolute paths
    if [[ $path == /* ]]; then
        path="${path#/}"
    fi
    
    local full_path="$base_dir/$path"
    
    if [ -f "$full_path" ] || [ -d "$full_path" ]; then
        return 0
    else
        return 1
    fi
}

# Check internal links
echo "=== CHECKING INTERNAL LINKS ==="
echo ""

while IFS= read -r html_file; do
    if [ -z "$html_file" ]; then
        continue
    fi
    
    # Count HTML files being processed
    processed_count=$((processed_count + 1))
    if [ $((processed_count % 10)) -eq 1 ]; then
        echo "Processing file $processed_count/$HTML_COUNT: $(basename "$html_file")"
    fi
    
    # Extract all href attributes from <a> tags
    while IFS= read -r link; do
        [ -z "$link" ] && continue
        
        # Skip external links, mailto, tel, etc.
        case "$link" in
            http*|mailto:*|tel:*|javascript:*|#*) 
                continue 
                ;;
        esac
        
        TOTAL_LINKS=$((TOTAL_LINKS + 1))
        
        # Check if link points to an existing file/directory
        if ! check_path "$link"; then
            echo "  ❌ BROKEN LINK: $link (in $(basename "$html_file"))"
            BROKEN_LINKS=$((BROKEN_LINKS + 1))
        fi
    done < <(grep -o 'href="[^"]*"' "$html_file" 2>/dev/null | sed 's/href="//g' | sed 's/"//g' || true)
    
done <<< "$HTML_FILES"

echo ""
echo "=== CHECKING IMAGE and JS REFERENCES ==="
echo ""

# Check all img src and script src attributes
while IFS= read -r html_file; do
    if [ -z "$html_file" ]; then
        continue
    fi
    
    # Extract all src attributes from <img> and <script> tags
    while IFS= read -r src; do
        [ -z "$src" ] && continue
        
        # Skip external resources
        case "$src" in
            http*|https:*)
                continue
                ;;
        esac
        
        TOTAL_IMAGES=$((TOTAL_IMAGES + 1))
        
        # Check if file exists
        if ! check_path "$src"; then
            echo "  ❌ MISSING RESOURCE: $src (in $(basename "$html_file"))"
            MISSING_IMAGES=$((MISSING_IMAGES + 1))
        fi
    done < <(grep -o 'src="[^"]*"' "$html_file" 2>/dev/null | sed 's/src="//g' | sed 's/"//g' || true)
    
done <<< "$HTML_FILES"

echo ""
echo "=== SUMMARY REPORT ==="
echo "Total HTML files: $HTML_COUNT"
echo "Total internal links checked: $TOTAL_LINKS"
echo "Total resources (images/JS) checked: $TOTAL_IMAGES"
echo "Broken links found: $BROKEN_LINKS"
echo "Missing resources found: $MISSING_IMAGES"
echo ""

# Final status
if [ $BROKEN_LINKS -eq 0 ] && [ $MISSING_IMAGES -eq 0 ]; then
    echo "✅ STATUS: ALL TESTS PASSED - WEBSITE IS FULLY FUNCTIONAL"
    echo ""
    echo "Congratulations! Your Smart Hotline website migration is complete and all links/resources are working correctly."
    echo ""
    echo "You can now deploy this website with confidence."
else
    echo "❌ STATUS: ISSUES FOUND - PLEASE FIX BEFORE DEPLOYMENT"
    echo ""
    if [ $BROKEN_LINKS -gt 0 ]; then
        echo "Please fix the $BROKEN_LINKS broken links before going live."
    fi
    if [ $MISSING_IMAGES -gt 0 ]; then
        echo "Please fix the $MISSING_IMAGES missing resources before going live."
    fi
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
        echo "  ✓ Root redirect is correct ($redirect_target)"
    else
        echo "  ❌ Root redirect target: $redirect_target (expected /fr/)"
    fi
else
    echo "  ❌ index.html not found"
fi

# Check CSS and JS files
CSS_COUNT=$(find "$WEBSITE_DIR" -name "*.css" -type f | wc -l)
JS_COUNT=$(find "$WEBSITE_DIR" -name "*.js" -type f | wc -l)
echo ""
echo "CSS files found: $CSS_COUNT"
echo "JS files found: $JS_COUNT"

# Test key pages
echo ""
echo "=== BASIC PAGE LOADING TEST ==="
for page in index.html en/index.html fr/index.html; do
    if [ -f "$WEBSITE_DIR/$page" ]; then
        echo "Testing $page:"
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
echo "=== FINAL VERIFICATION COMPLETE ==="
echo ""