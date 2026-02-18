/**
 * Post-build Pre-rendering Script
 * 
 * Generates static HTML files for each route with correct canonical URLs
 * and Open Graph tags baked into the server-delivered HTML.
 * 
 * Usage (after `npm run build`):
 *   node scripts/prerender.js
 * 
 * This creates route-specific HTML files in dist/ so that hosting platforms
 * (Netlify, Vercel, Cloudflare Pages) serve the correct canonical per route.
 * 
 * For Lovable hosting: This script is NOT needed (Lovable serves a single index.html).
 * For self-hosting: Run this after build, then deploy the dist/ folder.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://www.wintonstockfeed.co.nz';

// All routes and their SEO metadata
const routes = [
  { path: '/', title: 'Winton Stock Feed - New Zealand\'s Independent Stock Feed Specialists Since 1988', description: 'New Zealand\'s largest independent importer of molasses and stock feed since 1988. Quality molasses, PKE, dairy feed, calf feed, sheep feed and more.' },
  { path: '/about-us', title: 'About Us - Winton Stock Feed', description: 'Learn about Winton Stock Feed, New Zealand\'s largest independent stock feed specialists since 1988.' },
  { path: '/products', title: 'Products - Winton Stock Feed', description: 'Browse our full range of stock feed products including dairy feed, calf feed, sheep feed, deer feed, and more.' },
  { path: '/contact-us', title: 'Contact Us - Winton Stock Feed', description: 'Get in touch with Winton Stock Feed. Phone 03 236 6089 or 0800 MOLASSES.' },
  { path: '/testimonials', title: 'Testimonials - Winton Stock Feed', description: 'Read what our customers say about Winton Stock Feed products and service.' },
  { path: '/health-and-safety', title: 'Health and Safety - Winton Stock Feed', description: 'Our commitment to health and safety across all operations.' },
  { path: '/feed-quality-declarations', title: 'Feed Quality Declarations - Winton Stock Feed', description: 'Feed quality declarations for all Winton Stock Feed products.' },
  { path: '/feed-trailers', title: 'Feed Trailers - Winton Stock Feed', description: 'Quality feed trailers for sale from Winton Stock Feed.' },
  { path: '/products/dairy-feed', title: 'Dairy Feed - Winton Stock Feed', description: 'Premium dairy feed products including PKE, crushed grain, pellets and more.' },
  { path: '/products/chicken-feed', title: 'Chicken Feed - Winton Stock Feed', description: 'Quality chicken feed including Golden Layer Pellets.' },
  { path: '/products/calf-feed', title: 'Calf Feed - Winton Stock Feed', description: 'Specialist calf feed products for optimal growth and development.' },
  { path: '/products/sheep-feed', title: 'Sheep Feed - Winton Stock Feed', description: 'Quality sheep feed including sheep nuts for optimal nutrition.' },
  { path: '/products/goat-feed', title: 'Goat Feed - Winton Stock Feed', description: 'Premium goat feed pellets from Winton Stock Feed.' },
  { path: '/products/deer-feed', title: 'Deer Feed - Winton Stock Feed', description: 'Specialist deer feed products for New Zealand deer farmers.' },
  { path: '/deer-feed', title: 'Deer Feed - Winton Stock Feed', description: 'Specialist deer feed products for New Zealand deer farmers.' },
  { path: '/molasses', title: 'Molasses - Winton Stock Feed', description: 'New Zealand\'s largest independent importer of molasses. Nationwide delivery.' },
  { path: '/conedose', title: 'Condose - Winton Stock Feed', description: 'Condose mineral supplement systems for livestock.' },
  { path: '/conedose-calculator', title: 'Condose Calculator - Winton Stock Feed', description: 'Calculate your Condose mineral supplement requirements.' },
  { path: '/dairy-feed/pke', title: 'PKE (Palm Kernel Expeller) - Winton Stock Feed', description: 'Premium PKE palm kernel expeller for dairy feed.' },
  { path: '/dairy-feed/crushed-grain', title: 'Crushed Grain - Winton Stock Feed', description: 'Quality crushed grain for dairy cattle feed.' },
  { path: '/dairy-feed/maize-ddgs', title: 'Maize DDGS - Winton Stock Feed', description: 'Maize DDGS dried distillers grains for dairy feed.' },
  { path: '/dairy-feed/soybean-meal', title: 'Soybean Meal - Winton Stock Feed', description: 'High protein soybean meal for dairy cattle.' },
  { path: '/dairy-feed/soy-bran-hulls', title: 'Soy Bran Hulls - Winton Stock Feed', description: 'Quality soy bran hulls for dairy feed supplementation.' },
  { path: '/dairy-feed/tapioca', title: 'Tapioca - Winton Stock Feed', description: 'Tapioca feed for dairy cattle from Winton Stock Feed.' },
  { path: '/dairy-feed/high-energy-pellets', title: 'High Energy Pellets - Winton Stock Feed', description: 'High energy dairy pellets for maximum milk production.' },
  { path: '/dairy-feed/precalver-pellets', title: 'Precalver Pellets - Winton Stock Feed', description: 'Specialist precalver pellets for transition cow nutrition.' },
  { path: '/dairy-feed/calf-blend-17', title: 'Calf Blend 17% - Winton Stock Feed', description: 'Calf Blend 17% protein feed for young calves.' },
  { path: '/dairy-feed/calf-grower-16', title: 'Calf Grower 16% - Winton Stock Feed', description: 'Calf Grower 16% protein feed for growing calves.' },
  { path: '/dairy-feed/calf-grower-20', title: 'Calf Grower 20% - Winton Stock Feed', description: 'Calf Grower 20% high protein feed for calves.' },
  { path: '/dairy-feed/calf-muesli-18', title: 'Calf Muesli 18% - Winton Stock Feed', description: 'Calf Muesli 18% textured feed for young calves.' },
  { path: '/dairy-feed/eco-calf-finisher', title: 'Eco Calf Finisher - Winton Stock Feed', description: 'Eco Calf Finisher feed for finishing calves.' },
  { path: '/chicken-feed/golden-layer-pellets', title: 'Golden Layer Pellets - Winton Stock Feed', description: 'Premium Golden Layer Pellets for laying hens.' },
  { path: '/products/sheep-nuts', title: 'Sheep Nuts - Winton Stock Feed', description: 'Quality sheep nuts for optimal sheep nutrition.' },
  { path: '/goat-feed/goat-pellets', title: 'Goat Pellets - Winton Stock Feed', description: 'Premium goat pellets from Winton Stock Feed.' },
];

function prerender() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found. Run `npm run build` first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  let count = 0;

  for (const route of routes) {
    const canonicalUrl = route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`;
    
    // Inject canonical + og:url into the HTML
    let html = template;
    
    // Replace the inline JS canonical with a proper static one
    html = html.replace(
      /<!-- Canonical \+ og:url set immediately.*?<\/script>/s,
      `<link rel="canonical" href="${canonicalUrl}" />\n    <meta property="og:url" content="${canonicalUrl}" />`
    );

    // Update title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // Update meta description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Update OG title and description
    html = html.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${route.description}" />`
    );

    // Write to the correct path
    const outputDir = route.path === '/' 
      ? DIST_DIR 
      : path.join(DIST_DIR, route.path);
    
    fs.mkdirSync(outputDir, { recursive: true });
    
    const outputFile = route.path === '/'
      ? path.join(DIST_DIR, 'index.html')
      : path.join(outputDir, 'index.html');
    
    fs.writeFileSync(outputFile, html);
    count++;
    console.log(`✅ ${route.path} → ${path.relative(DIST_DIR, outputFile)}`);
  }

  console.log(`\n🎉 Pre-rendered ${count} routes with static canonical URLs.`);
  console.log('Deploy the dist/ folder to Netlify, Vercel, or Cloudflare Pages.');
}

prerender();
