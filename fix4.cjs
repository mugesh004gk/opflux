const fs = require('fs');

// Fix style.css
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/âœ”/g, '✔');
css = css.replace(/â†’/g, '→');
css = css.replace(/â€”/g, '—');

// Also fix the poster url in CSS that was messed up during my performance fix
css = css.replace(/url\(\'\.\/assets\/hero-bg\.png\'\)/g, "url('./public/hero-bg.png')");
fs.writeFileSync('style.css', css, 'utf8');

// Fix index.html remaining artifacts
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/â–/g, '❖');
html = html.replace(/âŒ/g, '❌');
html = html.replace(/â—/g, '●');

// Fix video tag
const badVid = '<video autoplay muted loop playsinline preload="none" poster="./assets/hero-bg.png" class="hero-vid-bg" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover;"><source src="./assets/hero.mp4" type="video/mp4"></video>';
const goodVid = '<video autoplay muted loop playsinline preload="none" poster="./public/hero-bg.png" class="hero-vid-bg" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover;">\n    <source src="/video/hero.mp4" type="video/mp4">\n    <source src="./public/video/hero.mp4" type="video/mp4">\n</video>';

html = html.replace(badVid, goodVid);

// There is one standalone <source> that might have been replaced improperly, let's just make sure the video works 
html = html.replace('<source src="./assets/hero.mp4" type="video/mp4">', '<source src="/video/hero.mp4" type="video/mp4">\n<source src="./public/video/hero.mp4" type="video/mp4">');

// Also ensure machine core path is right if we messed up
html = html.replace('<img loading="lazy" decoding="async" src="./machine-core.png.png"', '<img loading="lazy" decoding="async" src="./public/machine-core.png"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed styling, icons, and hero section video!!');
