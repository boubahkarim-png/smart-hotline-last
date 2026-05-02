// Localization data with currency/location detection
const translations = {
fr: {
nav: {
home: "Accueil",
services: "Services",
pricing: "Tarifs",
faq: "FAQ",
blog: "Blog",
contact: "Contact"
},
services: {
all: "Tous nos services",
all_desc: "Découvrir notre gamme complète",
reception: "Réception d'Appels",
reception_desc: "Ne manquez aucun appel",
emission: "Émission d'Appels",
emission_desc: "Développez votre clientèle",
support: "Support Client",
support_desc: "Améliorez la satisfaction",
crm: "CRM & Listes",
crm_desc: "Maximisez vos ventes",
ai_agents: "Agents Vocaux IA",
ai_agents_desc: "Automatisez vos appels"
},
footer: {
description: "Services de communication téléphonique adaptés aux entrepreneurs et PME.",
services: "Services",
company: "Entreprise",
contact: "Contact",
about: "À Propos",
careers: "Carrières",
copyright: "© 2024 Smart Hotline Agency. Tous droits réservés."
},
common: {
learn_more: "En savoir plus",
get_started: "Commencer",
request_demo: "Demander une Démo",
discover_offers: "Découvrir Nos Offres",
contact_us: "Contactez-nous"
},
pricing: {
currency: "€",
per_hour: "/heure",
per_month: "/mois",
popular: "La Plus Populaire",
special_offer: "Offre Spéciale",
choose: "Choisir cette Formule",
get_quote: "Demander un Devis"
}
},
en: {
nav: {
home: "Home",
services: "Services",
pricing: "Pricing",
faq: "FAQ",
blog: "Blog",
contact: "Contact"
},
services: {
all: "All Services",
all_desc: "Discover our complete range",
reception: "Call Reception",
reception_desc: "Never miss a call",
emission: "Outbound Calls",
emission_desc: "Grow your customer base",
support: "Customer Support",
support_desc: "Improve satisfaction",
crm: "CRM & Lists",
crm_desc: "Maximize your sales",
ai_agents: "AI Voice Agents",
ai_agents_desc: "Automate your calls"
},
footer: {
description: "Phone communication services adapted for entrepreneurs and SMEs.",
services: "Services",
company: "Company",
contact: "Contact",
about: "About",
careers: "Careers",
copyright: "© 2024 Smart Hotline Agency. All rights reserved."
},
common: {
learn_more: "Learn More",
get_started: "Get Started",
request_demo: "Request a Demo",
discover_offers: "Discover Our Offers",
contact_us: "Contact Us"
},
pricing: {
currency: "$",
per_hour: "/hour",
per_month: "/month",
popular: "Most Popular",
special_offer: "Special Offer",
choose: "Choose This Plan",
get_quote: "Get a Quote"
}
}
};

// Currency rates and symbols by region
const currencyConfig = {
EU: { symbol: "€", code: "EUR", rate: 1 },
US: { symbol: "$", code: "USD", rate: 1.08 },
CA: { symbol: "$", code: "CAD", rate: 1.47 },
CH: { symbol: "CHF", code: "CHF", rate: 0.95 },
DEFAULT: { symbol: "€", code: "EUR", rate: 1 }
};

// Current language and currency
let currentLang = 'fr';
let currentCurrency = currencyConfig.DEFAULT;

// Detect user location for currency
async function detectCurrency() {
try {
const response = await fetch('https://ipapi.co/json/');
const data = await response.json();
const country = data.country_code;

if (['FR', 'DE', 'BE', 'LU', 'ES', 'IT', 'PT', 'NL'].includes(country)) {
currentCurrency = currencyConfig.EU;
} else if (country === 'US') {
currentCurrency = currencyConfig.US;
} else if (country === 'CA') {
currentCurrency = currencyConfig.CA;
} else if (country === 'CH') {
currentCurrency = currencyConfig.CH;
} else {
currentCurrency = currencyConfig.DEFAULT;
}
} catch (error) {
console.log('Could not detect location, using default currency');
currentCurrency = currencyConfig.DEFAULT;
}

return currentCurrency;
}

// Convert price based on currency
function convertPrice(basePriceEUR) {
return Math.round(basePriceEUR * currentCurrency.rate);
}

// Format price with currency symbol
function formatPrice(price, currency) {
const config = currency || currentCurrency;
return `${config.symbol}${price}`;
}

// Initialize localization
async function initLocalization() {
// Detect currency first
await detectCurrency();

// Detect language from URL or browser
const path = window.location.pathname;

if (path.includes('/en/')) {
currentLang = 'en';
} else if (path.includes('/fr/')) {
currentLang = 'fr';
} else {
currentLang = 'fr';
}

// Update language selector
updateLanguageSelector();

// Apply translations
applyTranslations();

// Update all prices on the page
updatePrices();
}

// Update language selector UI
function updateLanguageSelector() {
const currentLangSpan = document.getElementById('currentLang');
if (currentLangSpan) {
currentLangSpan.textContent = currentLang.toUpperCase();
}
}

// Apply translations to elements with data-translate attribute
function applyTranslations() {
const elements = document.querySelectorAll('[data-translate]');

elements.forEach(element => {
const key = element.getAttribute('data-translate');
const translation = getTranslation(key);

if (translation) {
element.textContent = translation;
}
});
}

// Update all prices on the page
function updatePrices() {
document.querySelectorAll('[data-base-price]').forEach(el => {
const basePrice = parseFloat(el.getAttribute('data-base-price'));
const convertedPrice = convertPrice(basePrice);
el.textContent = formatPrice(convertedPrice);
});

document.querySelectorAll('[data-price-currency]').forEach(el => {
el.textContent = currentCurrency.symbol;
});
}

// Get translation for a key
function getTranslation(key) {
const keys = key.split('.');
let value = translations[currentLang];

for (const k of keys) {
if (value && value[k]) {
value = value[k];
} else {
return null;
}
}

return value;
}

// Switch language
function switchLanguage(lang) {
if (lang === currentLang) return;

const currentPath = window.location.pathname;

if (lang === 'en' && !currentPath.includes('/en/')) {
if (currentPath.endsWith('/')) {
window.location.href = currentPath + 'en/index.html';
} else {
const pathParts = currentPath.split('/');
const filename = pathParts[pathParts.length - 1];
window.location.href = currentPath.replace(filename, 'en/' + filename);
}
} else if (lang === 'fr' && currentPath.includes('/en/')) {
window.location.href = currentPath.replace('/en/', '/fr/');
}
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', initLocalization);
