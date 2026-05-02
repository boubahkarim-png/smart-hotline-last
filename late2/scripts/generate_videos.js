/**
 * Professional Promotional Video Generator
 * Uses VP9 codec (WebM) for web-optimized videos
 */

const videoshow = require('videoshow');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const VIDEOS_DIR = path.join(__dirname, '../public/videos');

// Ensure directories exist
if (!fs.existsSync(VIDEOS_DIR)) fs.mkdirSync(VIDEOS_DIR, { recursive: true });

// Video settings for HD quality (1920x1080) - VP9/WebM
const videoOptions = {
  fps: 30,
  loop: 4, // seconds per image
  transition: true,
  transitionDuration: 0.8,
  transitionColor: '0x0f172a',
  videoBitrate: 5000,
  videoCodec: 'libvpx-vp9',
  size: '1920x1080',
  format: 'webm',
  pixelFormat: 'yuv420p',
  subtitleStyles: {
    Fontname: 'DejaVu Sans Bold',
    Fontsize: 52,
    PrimaryColour: '&HFFFFFF',
    SecondaryColour: '&HF59E0B',
    BackColour: '&H000000',
    Bold: 1,
    Outline: 4,
    Shadow: 3,
    Alignment: 2,
    MarginV: 100
  }
};

// Helper: create gradient image
function createGradientImage(color1, color2, width, height, outputPath) {
  const cmd = `ffmpeg -y -f lavfi -i "color=c=${color1}:s=${width}x${height}:d=0.1,format=rgba" -vf "geq=r=(${color1.slice(2)}*(${height}-Y)/${height}+${color2.slice(2)}*Y/${height}):g=(${color1.slice(4,6)}*(${height}-Y)/${height}+${color2.slice(4,6)}*Y/${height}):b=(${color1.slice(6)}*(${height}-Y)/${height}+${color2.slice(6)}*Y/${height}))" -frames:v 1 "${outputPath}"`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    return outputPath;
  } catch (e) {
    // Fallback: create solid color
    execSync(`ffmpeg -y -f lavfi -i "color=c=${color1}:s=${width}x${height}:d=0.1" -frames:v 1 "${outputPath}"`, { stdio: 'pipe' });
    return outputPath;
  }
}

// Video 1: Hero Introduction (30 seconds)
async function createHeroVideo() {
  console.log('Creating Video 1: Hero Introduction...');
  
  const images = [
    {
      path: path.join(IMAGES_DIR, 'main-hero.jpg'),
      loop: 6,
      caption: 'SMART HOTLINE\nVotre Centre d\'Appels à Montréal'
    },
    {
      path: path.join(IMAGES_DIR, 'services-hero.jpg'),
      loop: 5,
      caption: 'Réception d\'appels 24/7\nTélémarketing Professionnel'
    },
    {
      path: path.join(IMAGES_DIR, 'agents-ia-hero.jpg'),
      loop: 5,
      caption: 'Conseillers Humains\n+ Intelligence Artificielle'
    },
    {
      path: path.join(IMAGES_DIR, 'team.webp'),
      loop: 6,
      caption: 'Appelez-nous:\n+1 514 819-0559\nwww.smart-hotline.com'
    }
  ];

  return new Promise((resolve, reject) => {
    videoshow(images, videoOptions)
      .save(path.join(VIDEOS_DIR, 'promo_hero_fr.webm'))
      .on('start', () => console.log('FFmpeg encoding started...'))
      .on('progress', (p) => process.stdout.write('.'))
      .on('error', reject)
      .on('end', (output) => {
        console.log('\n✓ Video 1 created:', output);
        resolve(output);
      });
  });
}

// Video 2: Services Showcase (35 seconds)
async function createServicesVideo() {
  console.log('Creating Video 2: Services Showcase...');
  
  const images = [
    {
      path: path.join(IMAGES_DIR, 'reception-hero.jpg'),
      loop: 5,
      caption: 'Réception d\'Appels 24/7\nRépondez à tous vos clients'
    },
    {
      path: path.join(IMAGES_DIR, 'telemarketing.jpg'),
      loop: 5,
      caption: 'Télémarketing Pro\nGénérez des leads qualifiés'
    },
    {
      path: path.join(IMAGES_DIR, 'support-tech.jpg'),
      loop: 5,
      caption: 'Support Technique\nAssistance experte 24/7'
    },
    {
      path: path.join(IMAGES_DIR, 'crm-interface.jpg'),
      loop: 5,
      caption: 'Intégration CRM\nSuivi complet de vos clients'
    },
    {
      path: path.join(IMAGES_DIR, 'about-hero.jpg'),
      loop: 5,
      caption: 'DÉCOUVREZ NOS TARIFS\nsmart-hotline.com/tarifs'
    }
  ];

  return new Promise((resolve, reject) => {
    videoshow(images, videoOptions)
      .save(path.join(VIDEOS_DIR, 'promo_services_fr.webm'))
      .on('start', () => console.log('FFmpeg encoding started...'))
      .on('progress', () => process.stdout.write('.'))
      .on('error', reject)
      .on('end', (output) => {
        console.log('\n✓ Video 2 created:', output);
        resolve(output);
      });
  });
}

// Video 3: Results & CTA (30 seconds)
async function createResultsVideo() {
  console.log('Creating Video 3: Results & CTA...');
  
  const images = [
    {
      path: path.join(IMAGES_DIR, 'team.webp'),
      loop: 6,
      caption: 'NOS RÉSULTATS\n98% Satisfaction Client'
    },
    {
      path: path.join(IMAGES_DIR, 'operator-1.jpg'),
      loop: 6,
      caption: '500+ Entreprises Nous Font Confiance\n+50 000 Appels Traités/Mois'
    },
    {
      path: path.join(IMAGES_DIR, 'contact-hero.png'),
      loop: 6,
      caption: 'PRÊT À DÉMARRER?\n+1 514 819-0559\nEssai Gratuit 2 Semaines'
    }
  ];

  return new Promise((resolve, reject) => {
    videoshow(images, videoOptions)
      .save(path.join(VIDEOS_DIR, 'promo_results_fr.webm'))
      .on('start', () => console.log('FFmpeg encoding started...'))
      .on('progress', () => process.stdout.write('.'))
      .on('error', reject)
      .on('end', (output) => {
        console.log('\n✓ Video 3 created:', output);
        resolve(output);
      });
  });
}

// Main execution
async function main() {
  console.log('\n=== SMART HOTLINE VIDEO GENERATOR ===\n');
  
  try {
    await createHeroVideo();
    await createServicesVideo();
    await createResultsVideo();
    
    // Summary
    console.log('\n=== VIDEOS CREATED ===');
    const files = fs.readdirSync(VIDEOS_DIR).filter(f => f.endsWith('.webm'));
    for (const file of files) {
      const stats = fs.statSync(path.join(VIDEOS_DIR, file));
      console.log(`  ${file}: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    }
    
    console.log('\n✓ All videos created successfully!');
  } catch (err) {
    console.error('\n✗ Failed:', err.message);
    process.exit(1);
  }
}

main();
