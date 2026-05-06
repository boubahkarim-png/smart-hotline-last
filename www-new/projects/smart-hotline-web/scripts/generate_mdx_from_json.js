const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_DIR = path.join(__dirname, '..');
const FR_JSON = path.join(PROJECT_DIR, 'content', 'articles-fr.json');
const EN_JSON = path.join(PROJECT_DIR, 'content', 'articles-en.json');
const FR_OUTPUT = path.join(PROJECT_DIR, 'content', 'posts', 'fr');
const EN_OUTPUT = path.join(PROJECT_DIR, 'content', 'posts', 'en');

// French month mapping
const FRENCH_MONTHS = {
  'janvier': '01', 'jan': '01',
  'fevrier': '02', 'fev': '02',
  'mars': '03',
  'avril': '04', 'avr': '04',
  'mai': '05',
  'juin': '06',
  'juillet': '07', 'jul': '07',
  'aout': '08', 'aou': '08',
  'septembre': '09', 'sep': '09',
  'octobre': '10', 'oct': '10',
  'novembre': '11', 'nov': '11',
  'decembre': '12', 'dec': '12'
};

function normalizeCategory(category) {
  var map = {
    'Strategie': 'Strategie', 'Strategy': 'Strategie',
    'Reception': 'Strategie',
    'Prospection': 'Prospection', 'Prospecting': 'Prospection',
    'Support': 'Conformite',
    'CRM': 'Mesure',
    'Sante': 'IA', 'Healthcare': 'IA',
    'Juridique': 'Secteurs', 'Legal': 'Secteurs',
    'Immobilier': 'Secteurs', 'Real Estate': 'Secteurs',
    'E-commerce': 'Secteurs',
    'Finance': 'Strategie', 'Financial': 'Strategie',
    'IA': 'IA', 'AI': 'IA',
    'Education': 'Secteurs',
    'Services a domicile': 'Secteurs', 'Home Services': 'Secteurs',
    'Fitness': 'Secteurs',
    'Hotellerie': 'Secteurs', 'Hospitality': 'Secteurs'
  };
  return map[category] || category;
}

function parseFrenchDate(dateStr) {
  var cleaned = dateStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  var parts = cleaned.split(/\s+/);
  if (parts.length >= 3) {
    var day = parts[0];
    var monthRaw = parts[1];
    var year = parts[2];
    var month = FRENCH_MONTHS[monthRaw];
    if (month) {
      return year + '-' + month + '-' + (day.length === 1 ? '0' : '') + day;
    }
  }
  return dateStr;
}

function parseEnglishDate(dateStr) {
  var date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  }
  return dateStr;
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .split(/\s+/).join('-')
    .replace(/-+/g, '-');
}

function htmlToMarkdown(html) {
  if (!html) return '';
  var md = html;

  // Images
  md = md.replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>?/g, function(m, src, alt) {
    return '![' + alt + '](' + src + ')';
  });

  // Links
  md = md.replace(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/g, function(m, href, text) {
    var clean = href.startsWith('http') ? href : 'https://smart-hotline.com/' + href;
    return '[' + text.trim() + '](' + clean + ')';
  });

  // Headings
  md = md.replace(/<h3[^>]*>/g, '\n### ');
  md = md.replace(/<\/h3>/g, '\n');
  md = md.replace(/<h2[^>]*>/g, '\n## ');
  md = md.replace(/<\/h2>/g, '\n');
  md = md.replace(/<h1[^>]*>/g, '\n# ');
  md = md.replace(/<\/h1>/g, '\n');

  // Paragraphs
  md = md.replace(/<p[^>]*>/g, '\n\n');
  md = md.replace(/<\/p>/g, '\n\n');

  // Lists
  md = md.replace(/<ul[^>]*>/g, '');
  md = md.replace(/<\/ul>/g, '\n');
  md = md.replace(/<ol[^>]*>/g, '');
  md = md.replace(/<\/ol>/g, '\n');
  md = md.replace(/<li[^>]*>/g, '- ');
  md = md.replace(/<\/li>/g, '\n');

  // Bold and italic
  md = md.replace(/<(strong|b)[^>]*>/g, '**');
  md = md.replace(/<\/(strong|b)>/g, '**');
  md = md.replace(/<(em|i)[^>]*>/g, '*');
  md = md.replace(/<\/(em|i)>/g, '*');

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // HTML entities
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');

  // Clean whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

function escapeYaml(value) {
  var s = String(value);
  if (s.indexOf(':') >= 0 || s.indexOf('"') >= 0 || s.indexOf("'") >= 0 || s.indexOf('#') >= 0) {
    return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  }
  return s;
}

function generateFrontmatter(data) {
  var lines = [
    '---',
    'title: ' + escapeYaml(data.title),
    'slug: "' + data.slug + '"',
    'date: "' + data.date + '"',
    'category: ' + escapeYaml(data.category),
    'author: ' + escapeYaml(data.author),
    'excerpt: ' + escapeYaml(data.excerpt),
    'image: "' + data.image + '"',
    'locale: "' + data.locale + '"'
  ];

  if (data.canonicalSlug) {
    lines.push('canonicalSlug: "' + data.canonicalSlug + '"');
  }

  if (data.tags && data.tags.length > 0) {
    lines.push('tags: ' + JSON.stringify(data.tags));
  }

  lines.push('published: true');
  lines.push('---');

  return lines.join('\n');
}

function matchArticles(frData, enData) {
  // Match by image URL (most reliable)
  var pairs = [];
  var usedEn = new Set();
  var i, j;

  for (i = 0; i < frData.length; i++) {
    var frArt = frData[i];
    var matched = null;
    var frImg = frArt.image ? frArt.image.split('?')[0] : '';

    if (frImg) {
      for (j = 0; j < enData.length; j++) {
        if (usedEn.has(j)) continue;
        var enImg = enData[j].image ? enData[j].image.split('?')[0] : '';
        if (frImg === enImg) {
          matched = j;
          break;
        }
      }
    }

    pairs.push({ fr: frArt, enIdx: matched });
    if (matched !== null) usedEn.add(matched);
  }

  // Add unmatched EN articles
  for (j = 0; j < enData.length; j++) {
    if (!usedEn.has(j)) {
      pairs.push({ fr: null, enIdx: j });
    }
  }

  return pairs;
}

function main() {
  console.log('Reading JSON files...');

  var frData = JSON.parse(fs.readFileSync(FR_JSON, 'utf-8'));
  var enData = JSON.parse(fs.readFileSync(EN_JSON, 'utf-8'));

  console.log('Found ' + frData.length + ' French articles, ' + enData.length + ' English articles');

  // Create output directories
  if (!fs.existsSync(FR_OUTPUT)) {
    fs.mkdirSync(FR_OUTPUT, { recursive: true });
    console.log('Created ' + FR_OUTPUT);
  }
  if (!fs.existsSync(EN_OUTPUT)) {
    fs.mkdirSync(EN_OUTPUT, { recursive: true });
    console.log('Created ' + EN_OUTPUT);
  }

  // Match articles
  var pairs = matchArticles(frData, enData);

  var frCount = 0;
  var enCount = 0;

  for (var p = 0; p < pairs.length; p++) {
    var pair = pairs[p];

    // Write French article
    if (pair.fr) {
      var frArt = pair.fr;
      var frSlug = generateSlug(frArt.title);
      var frDate = parseFrenchDate(frArt.date);
      var frCat = normalizeCategory(frArt.category);
      var frImage = frArt.image;
      if (!frImage.startsWith('http')) {
        frImage = '/' + frImage.replace(/^\//, '');
      }

      var frEnSlug = null;
      if (pair.enIdx !== null) {
        frEnSlug = generateSlug(enData[pair.enIdx].title);
      }

      var frFm = generateFrontmatter({
        title: frArt.title,
        slug: frSlug,
        date: frDate,
        category: frCat,
        author: 'Equipe Smart Hotline',
        excerpt: frArt.excerpt,
        image: frImage,
        locale: 'fr',
        canonicalSlug: frEnSlug,
        tags: frCat ? [frCat.toLowerCase()] : []
      });

      var frContent = htmlToMarkdown(frArt.content);
      var frMdx = frFm + '\n\n' + frContent + '\n';
      fs.writeFileSync(path.join(FR_OUTPUT, frSlug + '.mdx'), frMdx, 'utf-8');
      frCount++;
      console.log('[FR] ' + frDate + ' ' + frArt.title);
    }

    // Write English article
    if (pair.enIdx !== null) {
      var enArt = enData[pair.enIdx];
      var enSlug = generateSlug(enArt.title);
      var enDate = parseEnglishDate(enArt.date);
      var enCat = normalizeCategory(enArt.category);
      var enImage = enArt.image;
      if (!enImage.startsWith('http')) {
        enImage = '/' + enImage.replace(/^\//, '');
      }

      var enFrSlug = pair.fr ? generateSlug(pair.fr.title) : null;

      var enFm = generateFrontmatter({
        title: enArt.title,
        slug: enSlug,
        date: enDate,
        category: enCat,
        author: 'Smart Hotline Team',
        excerpt: enArt.excerpt,
        image: enImage,
        locale: 'en',
        canonicalSlug: enFrSlug,
        tags: enCat ? [enCat.toLowerCase()] : []
      });

      var enContent = htmlToMarkdown(enArt.content);
      var enMdx = enFm + '\n\n' + enContent + '\n';
      fs.writeFileSync(path.join(EN_OUTPUT, enSlug + '.mdx'), enMdx, 'utf-8');
      enCount++;
      console.log('[EN] ' + enDate + ' ' + enArt.title);
    }
  }

  console.log('\nDone! Generated ' + frCount + ' French and ' + enCount + ' English MDX files.');
  console.log('French posts: ' + FR_OUTPUT);
  console.log('English posts: ' + EN_OUTPUT);
}

try {
  main();
} catch (error) {
  console.error('Error:');
  console.error(error.message);
  console.error(error.stack);
  process.exit(1);
}
