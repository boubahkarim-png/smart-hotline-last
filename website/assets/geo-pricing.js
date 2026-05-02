/**
 * Geo-Pricing System for Smart Hotline
 * Detects user location and displays appropriate currency/prices
 * Supports: EUR (Europe), CHF (Switzerland), CAD (Canada), USD (USA/Default)
 */

(function() {
    'use strict';

    // Regional pricing configuration
    const PRICING_DATA = {
        EUR: {
            symbol: '€',
            name: 'Euro',
            locale: 'fr-FR',
            outbound: {
                starter: { price: 15, unit: 'hour', label: '15€/heure' },
                professional: { price: 17, unit: 'hour', label: '17€/heure', popular: true },
                business: { price: 16, unit: 'hour', label: '16€/heure' },
                enterprise: { price: 14, unit: 'hour', label: '14€/heure' }
            },
            inbound: {
                basic: { price: 149, unit: 'month', label: '149€/mois', calls: '500 appels' },
                advanced: { price: 249, unit: 'month', label: '249€/mois', calls: '1500 appels', popular: true },
                premium: { price: 349, unit: 'month', label: '349€/mois', calls: '2500 appels' }
            },
            support: {
                basic: { price: 199, unit: 'month', label: '199€/mois' },
                professional: { price: 299, unit: 'month', label: '299€/mois', popular: true },
                enterprise: { price: 499, unit: 'month', label: '499€/mois' }
            },
            ai: {
                starter: { price: 299, unit: 'month', label: 'À partir de 299€/mois' },
                professional: { price: 599, unit: 'month', label: '599€/mois' },
                enterprise: { price: 'custom', label: 'Sur devis' }
            }
        },
        CHF: {
            symbol: 'CHF',
            name: 'Franc Suisse',
            locale: 'fr-CH',
            outbound: {
                starter: { price: 16, unit: 'hour', label: '16 CHF/heure' },
                professional: { price: 18, unit: 'hour', label: '18 CHF/heure', popular: true },
                business: { price: 17, unit: 'hour', label: '17 CHF/heure' },
                enterprise: { price: 15, unit: 'hour', label: '15 CHF/heure' }
            },
            inbound: {
                basic: { price: 159, unit: 'month', label: '159 CHF/mois', calls: '500 appels' },
                advanced: { price: 269, unit: 'month', label: '269 CHF/mois', calls: '1500 appels', popular: true },
                premium: { price: 379, unit: 'month', label: '379 CHF/mois', calls: '2500 appels' }
            },
            support: {
                basic: { price: 219, unit: 'month', label: '219 CHF/mois' },
                professional: { price: 329, unit: 'month', label: '329 CHF/mois', popular: true },
                enterprise: { price: 549, unit: 'month', label: '549 CHF/mois' }
            },
            ai: {
                starter: { price: 329, unit: 'month', label: 'À partir de 329 CHF/mois' },
                professional: { price: 659, unit: 'month', label: '659 CHF/mois' },
                enterprise: { price: 'custom', label: 'Sur devis' }
            }
        },
        CAD: {
            symbol: '$',
            name: 'Dollar Canadien',
            locale: 'fr-CA',
            outbound: {
                starter: { price: 22, unit: 'hour', label: '22$/heure' },
                professional: { price: 24, unit: 'hour', label: '24$/heure', popular: true },
                business: { price: 23, unit: 'hour', label: '23$/heure' },
                enterprise: { price: 21, unit: 'hour', label: '21$/heure' }
            },
            inbound: {
                basic: { price: 199, unit: 'month', label: '199$/mois', calls: '500 calls' },
                advanced: { price: 329, unit: 'month', label: '329$/mois', calls: '1500 calls', popular: true },
                premium: { price: 459, unit: 'month', label: '459$/mois', calls: '2500 calls' }
            },
            support: {
                basic: { price: 269, unit: 'month', label: '269$/mois' },
                professional: { price: 399, unit: 'month', label: '399$/mois', popular: true },
                enterprise: { price: 669, unit: 'month', label: '669$/mois' }
            },
            ai: {
                starter: { price: 399, unit: 'month', label: 'Starting at $399/month' },
                professional: { price: 799, unit: 'month', label: '$799/month' },
                enterprise: { price: 'custom', label: 'Custom Quote' }
            }
        },
        USD: {
            symbol: '$',
            name: 'US Dollar',
            locale: 'en-US',
            outbound: {
                starter: { price: 19, unit: 'hour', label: '$19/hour' },
                professional: { price: 17, unit: 'hour', label: '$17/hour', popular: true },
                business: { price: 16, unit: 'hour', label: '$16/hour' },
                enterprise: { price: 15, unit: 'hour', label: '$15/hour' }
            },
            inbound: {
                basic: { price: 149, unit: 'month', label: '$149/month', calls: '500 calls' },
                advanced: { price: 249, unit: 'month', label: '$249/month', calls: '1500 calls', popular: true },
                premium: { price: 349, unit: 'month', label: '$349/month', calls: '2500 calls' }
            },
            support: {
                basic: { price: 199, unit: 'month', label: '$199/month' },
                professional: { price: 299, unit: 'month', label: '$299/month', popular: true },
                enterprise: { price: 499, unit: 'month', label: '$499/month' }
            },
            ai: {
                starter: { price: 299, unit: 'month', label: 'Starting at $299/month' },
                professional: { price: 599, unit: 'month', label: '$599/month' },
                enterprise: { price: 'custom', label: 'Custom Quote' }
            }
        }
    };

    // Country to currency mapping
    const COUNTRY_CURRENCY_MAP = {
        'FR': 'EUR', 'BE': 'EUR', 'LU': 'EUR', 'DE': 'EUR', 'NL': 'EUR',
        'ES': 'EUR', 'IT': 'EUR', 'PT': 'EUR', 'AT': 'EUR', 'IE': 'EUR',
        'GR': 'EUR', 'FI': 'EUR', 'SK': 'EUR', 'SI': 'EUR', 'EE': 'EUR',
        'LV': 'EUR', 'LT': 'EUR', 'CY': 'EUR', 'MT': 'EUR',
        'CH': 'CHF', 'LI': 'CHF',
        'CA': 'CAD',
        'US': 'USD'
    };

    let currentCurrency = 'USD';
    let userRegion = 'US';

    // Initialize the geo-pricing system
    function init() {
        const savedCurrency = localStorage.getItem('smartHotline_currency');
        const savedRegion = localStorage.getItem('smartHotline_region');

        if (savedCurrency && PRICING_DATA[savedCurrency]) {
            currentCurrency = savedCurrency;
            userRegion = savedRegion || 'US';
            applyPricing();
            updateCurrencySelector();
        } else {
            detectLocation();
        }

        setupCurrencySelector();
    }

    // Detect user location via IP
    function detectLocation() {
        fetch('https://ipapi.co/json/', { timeout: 3000 })
            .then(response => response.json())
            .then(data => {
                if (data && data.country) {
                    userRegion = data.country;
                    currentCurrency = COUNTRY_CURRENCY_MAP[data.country] || 'USD';
                    localStorage.setItem('smartHotline_currency', currentCurrency);
                    localStorage.setItem('smartHotline_region', userRegion);
                    applyPricing();
                    updateCurrencySelector();
                }
            })
            .catch(err => {
                console.log('Geo-detection failed, using default currency');
                currentCurrency = 'USD';
                applyPricing();
            });
    }

    // Apply pricing to all elements with data-price attributes
    function applyPricing() {
        const pricing = PRICING_DATA[currentCurrency];
        if (!pricing) return;

        // Update all price elements
        document.querySelectorAll('[data-price-service]').forEach(el => {
            const service = el.getAttribute('data-price-service');
            const plan = el.getAttribute('data-price-plan');
            const type = el.getAttribute('data-price-type') || 'label';

            if (pricing[service] && pricing[service][plan]) {
                const priceData = pricing[service][plan];
                if (type === 'price') {
                    el.textContent = priceData.price;
                } else if (type === 'symbol') {
                    el.textContent = pricing.symbol;
                } else {
                    el.textContent = priceData.label;
                }
            }
        });

        // Update currency symbols
        document.querySelectorAll('[data-currency-symbol]').forEach(el => {
            el.textContent = pricing.symbol;
        });

        // Update currency name
        document.querySelectorAll('[data-currency-name]').forEach(el => {
            el.textContent = pricing.name;
        });

        // Update region-specific content
        updateRegionContent();
    }

    // Update region-specific content (phone numbers, etc.)
    function updateRegionContent() {
        document.querySelectorAll('[data-region-content]').forEach(el => {
            const region = el.getAttribute('data-region-content');
            if (region === currentCurrency || region === 'default') {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });
    }

    // Setup currency selector dropdown
    function setupCurrencySelector() {
        const selector = document.getElementById('currency-selector');
        if (!selector) return;

        selector.addEventListener('change', function() {
            currentCurrency = this.value;
            localStorage.setItem('smartHotline_currency', currentCurrency);
            applyPricing();
        });
    }

    // Update currency selector to show current currency
    function updateCurrencySelector() {
        const selector = document.getElementById('currency-selector');
        if (selector) {
            selector.value = currentCurrency;
        }

        // Update all currency links
        document.querySelectorAll('[data-set-currency]').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-set-currency') === currentCurrency) {
                el.classList.add('active');
            }
        });
    }

    // Get current pricing data
    function getPricingData() {
        return PRICING_DATA[currentCurrency];
    }

    // Get current currency
    function getCurrency() {
        return currentCurrency;
    }

    // Format price with currency
    function formatPrice(amount, includeSymbol = true) {
        const pricing = PRICING_DATA[currentCurrency];
        if (!includeSymbol) return amount;
        return pricing.symbol === '€' ? `${amount}${pricing.symbol}` : `${pricing.symbol}${amount}`;
    }

    // Expose public methods
    window.GeoPricing = {
        init: init,
        getPricingData: getPricingData,
        getCurrency: getCurrency,
        formatPrice: formatPrice,
        applyPricing: applyPricing,
        setCurrency: function(currency) {
            if (PRICING_DATA[currency]) {
                currentCurrency = currency;
                localStorage.setItem('smartHotline_currency', currency);
                applyPricing();
                updateCurrencySelector();
            }
        }
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
