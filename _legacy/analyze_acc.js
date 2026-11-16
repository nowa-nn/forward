const fs = require('fs');
const html = fs.readFileSync('acc-52_dump.html', 'utf8');

// Title & meta
const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
console.log('=== META ===');
console.log('Title:', titleMatch ? titleMatch[1].trim() : 'N/A');
console.log('Description:', descMatch ? descMatch[1].trim() : 'N/A');

// Headings
console.log('\n=== HEADINGS ===');
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
console.log('H1:', h1s);
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
console.log('H2:', h2s);

// Phone numbers & emails
const phones = [...new Set([...html.matchAll(/(?:\+7|8)[\s\(-]?\d{3}[\s\)-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/g)].map(m => m[0]))];
console.log('\n=== PHONES ===', phones);

// Nav links / menu
console.log('\n=== NAV / MENU LINKS ===');
const links = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() }))
  .filter(l => l.text.length > 2 && l.text.length < 60 && !l.href.startsWith('javascript'));
const uniqueLinks = [];
const seen = new Set();
for (const l of links) {
  if (!seen.has(l.href + l.text)) {
    seen.add(l.href + l.text);
    uniqueLinks.push(l);
  }
}
console.log('Total unique links:', uniqueLinks.length);
console.log('Sample links:\n', uniqueLinks.slice(0, 35));

// Detect CMS or libraries
console.log('\n=== TECH DETECT ===');
const scripts = [...html.matchAll(/<script[^>]*src=["']([^"']*)["']/gi)].map(m => m[1]);
console.log('External scripts:', scripts);

const stylesheets = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*)["']/gi)].map(m => m[1]);
console.log('Stylesheets count:', stylesheets.length);
