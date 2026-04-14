const fs = require('fs');

// Fix style.css
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/âœ”/g, '✔');
css = css.replace(/â†’/g, '→');
css = css.replace(/â€”/g, '—');
fs.writeFileSync('style.css', css, 'utf8');

// Fix index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/â–/g, '❖');
html = html.replace(/âŒ Something went wrong/g, '❌ Something went wrong');
html = html.replace(/â—/g, '●');

// Restore Video Source
const badVideo = '<video autoplay muted loop playsinline preload="none" poster="./assets/hero-bg.png" class="hero-vid-bg" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover;"><source src="./assets/hero.mp4" type="video/mp4"></video>';

const goodVideo = '<video autoplay muted loop playsinline preload="none" poster="./public/hero-bg.png" class="hero-vid-bg" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover;">\n    <source src="/video/hero.mp4" type="video/mp4">\n    <source src="./public/video/hero.mp4" type="video/mp4">\n</video>';

html = html.replace(badVideo, goodVideo);

// Also fix the poster url
css = css.replace(/url\('\.\/assets\/hero-bg\.png'\)/g, 'url(\'./public/hero-bg.png\')');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed CSS and HTML encoding and video path');
