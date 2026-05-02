#!/usr/bin/env python3
"""
Fix Smart Hotline Website - Unified Headers and Footers
- Remove currency selector (IP-based auto-detection only)
- Unified header across all EN/FR pages
- Unified footer across all EN/FR pages
- Fix hero layout (text left, image right)
"""

import os
import re
from pathlib import Path

# Unified EN Header (no currency selector)
EN_HEADER = '''<!-- Header -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
<nav class="container mx-auto px-6 py-4 flex justify-between items-center">
<a href="index.html" class="flex items-center space-x-2">
<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
<span class="text-xl font-bold text-gray-900">Smart Hotline</span>
</a>
<div class="hidden md:flex items-center space-x-8">
<a href="index.html" class="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
<div class="relative group">
<button class="text-gray-700 hover:text-primary-600 transition-colors flex items-center">Services <i class="fas fa-chevron-down text-xs ml-1"></i></button>
<div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<a href="services.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors border-b"><i class="fas fa-th-large text-primary-600 mr-3"></i>All Services</a>
<a href="reception.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-phone-alt text-primary-600 mr-3"></i>Call Reception</a>
<a href="emission.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-phone-volume text-primary-600 mr-3"></i>Outbound Calls</a>
<a href="support.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-headset text-primary-600 mr-3"></i>Customer Support</a>
<a href="crm-lists.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-database text-primary-600 mr-3"></i>CRM & Lists</a>
</div>
</div>
<a href="price.html" class="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
<a href="about.html" class="text-gray-700 hover:text-primary-600 transition-colors">About</a>
<a href="blog.html" class="text-gray-700 hover:text-primary-600 transition-colors">Blog</a>
<a href="contact.html" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
</div>
<div class="flex items-center space-x-4">
<a href="../fr/index.html" class="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors text-sm"><span>EN</span><i class="fas fa-globe text-xs ml-1"></i></a>
<button id="mobileMenuToggle" class="md:hidden text-gray-700"><i class="fas fa-bars text-xl"></i></button>
</div>
</nav>
<div id="mobileMenu" class="hidden md:hidden bg-white border-t">
<div class="container mx-auto px-6 py-4 flex flex-col space-y-3">
<a href="index.html" class="text-gray-700 hover:text-primary-600">Home</a>
<div class="border-t pt-3">
<div class="font-medium text-gray-700 mb-2">Services</div>
<div class="pl-4 space-y-2">
<a href="services.html" class="block text-gray-600 hover:text-primary-600">All Services</a>
<a href="reception.html" class="block text-gray-600 hover:text-primary-600">Call Reception</a>
<a href="emission.html" class="block text-gray-600 hover:text-primary-600">Outbound Calls</a>
<a href="support.html" class="block text-gray-600 hover:text-primary-600">Customer Support</a>
<a href="crm-lists.html" class="block text-gray-600 hover:text-primary-600">CRM & Lists</a>
</div>
</div>
<a href="price.html" class="text-gray-700 hover:text-primary-600">Pricing</a>
<a href="about.html" class="text-gray-700 hover:text-primary-600">About</a>
<a href="blog.html" class="text-gray-700 hover:text-primary-600">Blog</a>
<a href="contact.html" class="text-gray-700 hover:text-primary-600">Contact</a>
</div>
</div>
</header>'''

# Unified FR Header (no currency selector)
FR_HEADER = '''<!-- Header -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
<nav class="container mx-auto px-6 py-4 flex justify-between items-center">
<a href="index.html" class="flex items-center space-x-2">
<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
<span class="text-xl font-bold text-gray-900">Smart Hotline</span>
</a>
<div class="hidden md:flex items-center space-x-8">
<a href="index.html" class="text-gray-700 hover:text-primary-600 transition-colors">Accueil</a>
<div class="relative group">
<button class="text-gray-700 hover:text-primary-600 transition-colors flex items-center">Services <i class="fas fa-chevron-down text-xs ml-1"></i></button>
<div class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<a href="services.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors border-b"><i class="fas fa-th-large text-primary-600 mr-3"></i>Tous les Services</a>
<a href="reception.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-phone-alt text-primary-600 mr-3"></i>Reception d'Appels</a>
<a href="emission.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-phone-volume text-primary-600 mr-3"></i>Emission d'Appels</a>
<a href="support.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-headset text-primary-600 mr-3"></i>Support Client</a>
<a href="crm-lists.html" class="block px-4 py-3 hover:bg-primary-50 transition-colors"><i class="fas fa-database text-primary-600 mr-3"></i>CRM & Listes</a>
</div>
</div>
<a href="price.html" class="text-gray-700 hover:text-primary-600 transition-colors">Tarifs</a>
<a href="about.html" class="text-gray-700 hover:text-primary-600 transition-colors">A Propos</a>
<a href="blog.html" class="text-gray-700 hover:text-primary-600 transition-colors">Blog</a>
<a href="contact.html" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
</div>
<div class="flex items-center space-x-4">
<a href="../en/index.html" class="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors text-sm"><span>FR</span><i class="fas fa-globe text-xs ml-1"></i></a>
<button id="mobileMenuToggle" class="md:hidden text-gray-700"><i class="fas fa-bars text-xl"></i></button>
</div>
</nav>
<div id="mobileMenu" class="hidden md:hidden bg-white border-t">
<div class="container mx-auto px-6 py-4 flex flex-col space-y-3">
<a href="index.html" class="text-gray-700 hover:text-primary-600">Accueil</a>
<div class="border-t pt-3">
<div class="font-medium text-gray-700 mb-2">Services</div>
<div class="pl-4 space-y-2">
<a href="services.html" class="block text-gray-600 hover:text-primary-600">Tous les Services</a>
<a href="reception.html" class="block text-gray-600 hover:text-primary-600">Reception d'Appels</a>
<a href="emission.html" class="block text-gray-600 hover:text-primary-600">Emission d'Appels</a>
<a href="support.html" class="block text-gray-600 hover:text-primary-600">Support Client</a>
<a href="crm-lists.html" class="block text-gray-600 hover:text-primary-600">CRM & Listes</a>
</div>
</div>
<a href="price.html" class="text-gray-700 hover:text-primary-600">Tarifs</a>
<a href="about.html" class="text-gray-700 hover:text-primary-600">A Propos</a>
<a href="blog.html" class="text-gray-700 hover:text-primary-600">Blog</a>
<a href="contact.html" class="text-gray-700 hover:text-primary-600">Contact</a>
</div>
</div>
</header>'''

# Unified EN Footer
EN_FOOTER = '''<!-- Footer -->
<footer class="bg-dark-900 text-white py-12">
<div class="container mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<div class="flex items-center space-x-2 mb-4">
<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
<span class="text-xl font-bold">Smart Hotline Agency</span>
</div>
<p class="text-gray-400">Professional telephony services for SMEs in Europe, Canada, and USA.</p>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Services</h3>
<ul class="space-y-2 text-gray-400">
<li><a href="services.html" class="hover:text-white transition-colors">All Services</a></li>
<li><a href="reception.html" class="hover:text-white transition-colors">Call Reception</a></li>
<li><a href="emission.html" class="hover:text-white transition-colors">Outbound Calls</a></li>
<li><a href="support.html" class="hover:text-white transition-colors">Customer Support</a></li>
<li><a href="crm-lists.html" class="hover:text-white transition-colors">CRM & Lists</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Company</h3>
<ul class="space-y-2 text-gray-400">
<li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
<li><a href="blog.html" class="hover:text-white transition-colors">Blog</a></li>
<li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
<li><a href="faq.html" class="hover:text-white transition-colors">FAQ</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Contact</h3>
<div class="space-y-3 text-gray-400">
<p><i class="fab fa-whatsapp mr-2"></i>WhatsApp: +1 514 819 0559</p>
<p><i class="fas fa-envelope mr-2"></i>direction@smart-hotline.com</p>
<p><i class="fas fa-globe mr-2"></i>smart-hotline.com</p>
<p><i class="fas fa-calendar mr-2"></i><a href="https://calendly.com/boubah-karim/30min" class="hover:text-white">Book a Meeting</a></p>
</div>
<div class="flex space-x-4 mt-4">
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-linkedin text-xl"></i></a>
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-twitter text-xl"></i></a>
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
</div>
</div>
</div>
<div class="border-t border-gray-800 pt-8 text-center text-gray-400">
<p>&copy; 2024 Smart Hotline Agency. All rights reserved.</p>
</div>
</div>
</footer>'''

# Unified FR Footer
FR_FOOTER = '''<!-- Footer -->
<footer class="bg-dark-900 text-white py-12">
<div class="container mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<div class="flex items-center space-x-2 mb-4">
<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
<span class="text-xl font-bold">Agence Smart Hotline</span>
</div>
<p class="text-gray-400">Services de telephonie professionnelle pour PME en Europe, Canada et USA.</p>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Services</h3>
<ul class="space-y-2 text-gray-400">
<li><a href="services.html" class="hover:text-white transition-colors">Tous les Services</a></li>
<li><a href="reception.html" class="hover:text-white transition-colors">Reception d'Appels</a></li>
<li><a href="emission.html" class="hover:text-white transition-colors">Emission d'Appels</a></li>
<li><a href="support.html" class="hover:text-white transition-colors">Support Client</a></li>
<li><a href="crm-lists.html" class="hover:text-white transition-colors">CRM & Listes</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Entreprise</h3>
<ul class="space-y-2 text-gray-400">
<li><a href="about.html" class="hover:text-white transition-colors">A Propos</a></li>
<li><a href="blog.html" class="hover:text-white transition-colors">Blog</a></li>
<li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>
<li><a href="faq.html" class="hover:text-white transition-colors">FAQ</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Contact</h3>
<div class="space-y-3 text-gray-400">
<p><i class="fab fa-whatsapp mr-2"></i>WhatsApp: +1 514 819 0559</p>
<p><i class="fas fa-envelope mr-2"></i>direction@smart-hotline.com</p>
<p><i class="fas fa-globe mr-2"></i>smart-hotline.com</p>
<p><i class="fas fa-calendar mr-2"></i><a href="https://calendly.com/boubah-karim/30min" class="hover:text-white">Prendre RDV</a></p>
</div>
<div class="flex space-x-4 mt-4">
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-linkedin text-xl"></i></a>
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-twitter text-xl"></i></a>
<a href="#" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-facebook text-xl"></i></a>
</div>
</div>
</div>
<div class="border-t border-gray-800 pt-8 text-center text-gray-400">
<p>&copy; 2024 Agence Smart Hotline. Tous droits reserves.</p>
</div>
</div>
</footer>'''

# Mobile menu script
MOBILE_MENU_SCRIPT = '''
<script>
document.getElementById('mobileMenuToggle').addEventListener('click', function() {
const menu = document.getElementById('mobileMenu');
menu.classList.toggle('hidden');
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
const reveals = document.querySelectorAll('.scroll-reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));
});
</script>'''

def fix_file(filepath, is_en=True):
    """Fix a single HTML file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Get the correct header/footer based on language
    header = EN_HEADER if is_en else FR_HEADER
    footer = EN_FOOTER if is_en else FR_FOOTER

    # Remove currency selector if exists
    content = re.sub(r'<select[^>]*id="currency-selector"[^>]*>.*?</select>', '', content, flags=re.DOTALL)

    # Replace header (from <header to </header>)
    content = re.sub(r'<header[^>]*>.*?</header>', header, content, flags=re.DOTALL)

    # Replace footer (from <footer to </footer>)
    content = re.sub(r'<footer[^>]*>.*?</footer>', footer, content, flags=re.DOTALL)

    # Ensure mobile menu script is present
    if 'mobileMenuToggle' not in content or 'addEventListener' not in content:
        # Add before </body>
        content = content.replace('</body>', MOBILE_MENU_SCRIPT + '\n</body>')

    # Ensure geo-pricing.js is loaded
    if 'geo-pricing.js' not in content:
        # Add after Tailwind CSS
        content = content.replace(
            '<script src="https://cdn.tailwindcss.com"></script>',
            '<script src="https://cdn.tailwindcss.com"></script>\n<script src="../assets/geo-pricing.js"></script>'
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return True

def main():
    base_dir = Path('/root/smart-hotline-fix')

    # EN pages
    en_dir = base_dir / 'en'
    en_pages = ['index.html', 'services.html', 'price.html', 'about.html', 'contact.html',
                'blog.html', 'reception.html', 'emission.html', 'support.html', 'crm-lists.html', 'faq.html', 'ai-agents.html']

    # FR pages
    fr_dir = base_dir / 'fr'
    fr_pages = ['index.html', 'services.html', 'price.html', 'about.html', 'contact.html',
                'fr/blog.html', 'reception.html', 'emission.html', 'support.html', 'crm-lists.html', 'faq.html', 'ai-agents.html']

    print("Fixing EN pages...")
    for page in en_pages:
        filepath = en_dir / page
        if filepath.exists():
            if fix_file(filepath, is_en=True):
                print(f"  Fixed: {page}")
        else:
            print(f"  Skipped (not found): {page}")

    print("\nFixing FR pages...")
    for page in fr_pages:
        filepath = fr_dir / page
        if filepath.exists():
            if fix_file(filepath, is_en=False):
                print(f"  Fixed: {page}")
        else:
            print(f"  Skipped (not found): {page}")

    print("\nDone! All pages have been updated with unified headers and footers.")

if __name__ == '__main__':
    main()
