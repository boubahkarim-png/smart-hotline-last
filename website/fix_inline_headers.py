#!/usr/bin/env python3
"""Fix inline headers in HTML files"""
import re
import os
from pathlib import Path

# Files with inline headers that need to be converted to header-container
FILES_TO_FIX = [
    'en/price.html', 'en/contact.html', 'en/blog.html', 'en/faq.html', 'en/ai-agents.html',
    'fr/price.html', 'fr/ai-agents.html', 'fr/blog.html', 'fr/faq.html'
]

def fix_file(filepath):
    """Replace inline header with header-container div"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match inline header (from <!-- Header to </header>)
    header_pattern = r'<!-- Header[^>]*-->.*?</header>'
    
    # Replace with header-container div
    content_new = re.sub(header_pattern, '<div id="header-container"></div>', content, flags=re.DOTALL)
    
    # Ensure partials.js is loaded before </body>
    if 'partials.js' not in content_new:
        content_new = content_new.replace('</body>', '<script src="../assets/partials.js"></script>\n</body>')
    
    # Remove any currency-selector dropdown
    content_new = re.sub(r'<select[^>]*id="currency-selector"[^>]*>.*?</select>', '', content_new, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content_new)
    
    return True

def main():
    base = Path('/root/smart-hotline-fix')
    for f in FILES_TO_FIX:
        filepath = base / f
        if filepath.exists():
            if fix_file(filepath):
                print(f"Fixed: {f}")
        else:
            print(f"Not found: {f}")
    print("Done!")

if __name__ == '__main__':
    main()
