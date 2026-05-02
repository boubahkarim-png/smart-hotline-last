// Smart Hotline - Main JavaScript
// Handles header/footer loading, mobile menu, and geo-pricing

(function() {
'use strict';

// Get base path for GitHub Pages
function getBasePath() {
var path = window.location.pathname;
var parts = path.split('/').filter(Boolean);
// Check if we're on GitHub Pages
if (window.location.hostname.indexOf('github.io') !== -1 && parts.length > 0) {
return '/' + parts[0];
}
return '';
}

// Get current language from URL
function getCurrentLang() {
var path = window.location.pathname;
if (path.indexOf('/en/') !== -1) return 'en';
return 'fr';
}

// Load header/footer partials
function loadPartials() {
var base = getBasePath();
var headerContainer = document.getElementById('header-container');
var footerContainer = document.getElementById('footer-container');

if (headerContainer) {
fetch(base + '/includes/header.html')
.then(function(r) { return r.text(); })
.then(function(html) {
headerContainer.innerHTML = html;
fixNavigationLinks();
initMobileMenu();
initCurrencySelector();
initLanguageSwitcher();
applyLanguage(getCurrentLang());
})
.catch(function(err) {
console.error('Header load failed:', err);
});
}

if (footerContainer) {
fetch(base + '/includes/footer.html')
.then(function(r) { return r.text(); })
.then(function(html) {
footerContainer.innerHTML = html;
})
.catch(function(err) {
console.error('Footer load failed:', err);
});
}
}

// Fix navigation links for current language
function fixNavigationLinks() {
var base = getBasePath();
var lang = getCurrentLang();
var langDir = '/' + lang + '/';

var links = document.querySelectorAll('header a[href$=".html"]');
links.forEach(function(link) {
var href = link.getAttribute('href');
if (href && !href.startsWith('http') && !href.startsWith('#')) {
// Already has full path
if (href.indexOf('/en/') !== -1 || href.indexOf('/fr/') !== -1) return;
// Add base + lang directory
link.setAttribute('href', base + langDir + href);
}
});

// Fix logo link
var logo = document.querySelector('.logo-link, a[href="index.html"]');
if (logo) {
logo.setAttribute('href', base + langDir + 'index.html');
}
}

// Initialize mobile menu
function initMobileMenu() {
var toggle = document.getElementById('mobileMenuToggle');
var menu = document.getElementById('mobileMenu');
if (toggle && menu) {
toggle.onclick = function() {
var isOpen = menu.style.display === 'block';
menu.style.display = isOpen ? 'none' : 'block';
toggle.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
};
}
}

// Initialize currency selector
function initCurrencySelector() {
var selector = document.getElementById('currency-selector');
if (selector && window.GeoPricing) {
selector.addEventListener('change', function() {
window.GeoPricing.setCurrency(this.value);
});
}
}

// Initialize language switcher
function initLanguageSwitcher() {
var langLinks = document.querySelectorAll('.lang-link, [data-lang]');
langLinks.forEach(function(link) {
link.addEventListener('click', function(e) {
e.preventDefault();
var targetLang = this.getAttribute('data-lang');
if (targetLang) switchLanguage(targetLang);
});
});
}

// Apply language to header elements
function applyLanguage(lang) {
var frElements = document.querySelectorAll('.lang-fr');
var enElements = document.querySelectorAll('.lang-en');

frElements.forEach(function(el) {
el.style.display = lang === 'fr' ? 'inline' : 'none';
});
enElements.forEach(function(el) {
el.style.display = lang === 'en' ? 'inline' : 'none';
});

// Update language switcher active state
var langLinks = document.querySelectorAll('.lang-link, [data-lang]');
langLinks.forEach(function(link) {
var linkLang = link.getAttribute('data-lang');
if (linkLang === lang) {
link.style.background = '#0ea5e9';
link.style.color = '#fff';
} else {
link.style.background = 'transparent';
link.style.color = '#64748b';
}
});
}

// Switch language
function switchLanguage(targetLang) {
var base = getBasePath();
var currentLang = getCurrentLang();
var path = window.location.pathname;
var filename = path.split('/').pop() || 'index.html';
if (filename === '' || filename === base.replace('/', '')) {
filename = 'index.html';
}

var newPath;
if (targetLang === 'en') {
newPath = base + '/en/' + filename;
} else {
newPath = base + '/fr/' + filename;
}

window.location.href = newPath;
}

// Initialize on DOM ready
function init() {
loadPartials();

// Mobile menu toggle
var mobileBtn = document.getElementById('mobileMenuToggle');
var mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
mobileBtn.onclick = function() {
var isOpen = mobileMenu.style.display === 'block';
mobileMenu.style.display = isOpen ? 'none' : 'block';
};
}

// Scroll reveal animation
var reveals = document.querySelectorAll('.scroll-reveal');
if (reveals.length > 0 && 'IntersectionObserver' in window) {
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
entry.target.classList.add('active');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
reveals.forEach(function(el) { observer.observe(el); });
}
}

// Auto-init
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}

// Expose globally
window.SmartHotline = {
applyLanguage: applyLanguage,
switchLanguage: switchLanguage,
getBasePath: getBasePath
};

})();
