(function () {
  'use strict';

  if (!navigator.modelContext || !navigator.modelContext.registerTool) {
    return;
  }

  var SITE_URL = 'https://www.smart-hotline.com';

  var pricingData = {
    inbound: {
      fr: 'Réception d\'appels : à partir de 15-19 $ CAD/heure (tarif d\'essai). Forfaits mensuels à partir de 299 $ CAD.',
      en: 'Inbound call reception: from $15-19 CAD/hour (trial rate). Monthly packages from $299 CAD.'
    },
    outbound: {
      fr: 'Émission d\'appels : à partir de 18-22 $ CAD/heure par agent. Forfaits campagne à partir de 499 $ CAD/mois.',
      en: 'Outbound calling: from $18-22 CAD/hour per agent. Campaign packages from $499 CAD/month.'
    },
    'ai-voice': {
      fr: 'Agents IA vocaux (Sophie) : à partir de 299 $ CAD/mois. Configuration en 48 heures. Jusqu\'à 70 % moins cher qu\'un personnel interne.',
      en: 'AI voice agents (Sophie): from $299 CAD/month. 48-hour setup. Up to 70% cheaper than in-house staff.'
    },
    'crm-integration': {
      fr: 'Intégration CRM : incluse avec tous les forfaits de service. Développement d\'intégration personnalisée à partir de 999 $ CAD (frais uniques).',
      en: 'CRM integration: included with all service plans. Custom integration development from $999 CAD one-time setup.'
    }
  };

  var availabilityData = {
    CA: { status: 'available', setupTime: '48 hours', coverage: '24/7/365' },
    FR: { status: 'available', setupTime: '72 hours', coverage: '24/7/365' },
    BE: { status: 'available', setupTime: '72 hours', coverage: '24/7/365' },
    CH: { status: 'available', setupTime: '72 hours', coverage: '24/7/365' },
    US: { status: 'available', setupTime: '48 hours', coverage: '24/7/365' }
  };

  try {
    navigator.modelContext.registerTool(
      {
        name: 'get-pricing',
        description: 'Get current pricing for Smart Hotline call center and AI voice agent services',
        inputSchema: {
          type: 'object',
          properties: {
            service: {
              type: 'string',
              enum: ['inbound', 'outbound', 'ai-voice', 'crm-integration'],
              description: 'Service type to get pricing for'
            },
            language: {
              type: 'string',
              enum: ['fr', 'en'],
              description: 'Language preference for the response'
            }
          },
          required: ['service']
        }
      },
      {
        handler: async function (args) {
          var service = args.service || 'inbound';
          var lang = args.language || 'en';
          var info = pricingData[service];
          if (!info) {
            return { error: 'Unknown service: ' + service, availableServices: Object.keys(pricingData) };
          }
          return {
            service: service,
            pricing: info[lang] || info.en,
            currency: 'CAD',
            source: SITE_URL + '/' + lang + '/pricing/',
            contact: { email: 'direction@smart-hotline.com', phone: '+1-514-819-0559' }
          };
        }
      }
    );

    navigator.modelContext.registerTool(
      {
        name: 'check-availability',
        description: 'Check service availability and setup timeline for Smart Hotline in a specific region',
        inputSchema: {
          type: 'object',
          properties: {
            region: {
              type: 'string',
              enum: ['CA', 'FR', 'BE', 'CH', 'US'],
              description: 'Business region (CA=Canada, FR=France, BE=Belgium, CH=Switzerland, US=United States)'
            },
            service_type: {
              type: 'string',
              enum: ['inbound', 'outbound', 'ai-agents'],
              description: 'Type of service to check availability for'
            }
          },
          required: ['region']
        }
      },
      {
        handler: async function (args) {
          var region = (args.region || 'CA').toUpperCase();
          var info = availabilityData[region];
          if (!info) {
            return { error: 'Unknown region: ' + region, availableRegions: Object.keys(availabilityData) };
          }
          return {
            region: region,
            serviceType: args.service_type || 'all',
            status: info.status,
            setupTime: info.setupTime,
            coverage: info.coverage,
            bilingual: true,
            languages: ['French', 'English'],
            source: SITE_URL,
            contact: { email: 'direction@smart-hotline.com', phone: '+1-514-819-0559' }
          };
        }
      }
    );

    navigator.modelContext.registerTool(
      {
        name: 'request-callback',
        description: 'Request a callback from Smart Hotline Agency to discuss services',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Contact name' },
            email: { type: 'string', format: 'email', description: 'Contact email address' },
            phone: { type: 'string', description: 'Contact phone number' },
            language: { type: 'string', 'enum': ['fr', 'en'], description: 'Preferred language' }
          },
          required: ['name', 'email']
        }
      },
      {
        handler: async function (args) {
          return {
            status: 'callback_requested',
            message: args.language === 'fr'
              ? 'Merci ' + args.name + '! Un conseiller vous rappellera dans les 2 heures ouvrables.'
              : 'Thank you, ' + args.name + '! An advisor will call you back within 2 business hours.',
            contactForm: SITE_URL + '/' + (args.language || 'en') + '/contact/',
            email: 'direction@smart-hotline.com',
            phone: '+1-514-819-0559'
          };
        }
      }
    );

    console.log('[WebMCP] Smart Hotline tools registered: get-pricing, check-availability, request-callback');
  } catch (err) {
    console.error('[WebMCP] Registration failed:', err);
  }
})();
