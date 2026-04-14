const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const replacements = {
  'â€”': '—',
  'â±': '⏱',
  'âš™ï¸': '⚙️',
  'ðŸ“¦': '📦',
  'ðŸ“ˆ': '📈',
  'ðŸ“Š': '📊',
  'ðŸ”Œ': '🔌',
  'ðŸ› ï¸': '🛠️',
  'âš¡': '⚡',
  'â–': '❖',
  'â›Ÿ': '⛟',
  'ðŸ”„': '🔄',
  'ðŸŽ¯': '🎯',
  'âš ï¸': '⚠️',
  'âœ”': '✔',
  'ðŸ”—': '🔗',
  'ðŸ“§': '📧',
  'âœ…': '✅',
  'âŒ': '❌',
  'â—': '●',
  'Expertise ExÃ©cutive': 'Expertise Exécutive',
  'ðŸ›ï¸': '🛒',
  'ðŸ“Œ': '📍',
  'ðŸ“': '📐'
};
for (const [bad, good] of Object.entries(replacements)) {
  html = html.split(bad).join(good);
}
html = html.replace('1.2rem; flex-shrink: 0;">📐</div>', '1.2rem; flex-shrink: 0;">📍</div>');
html = html.replace('</div>📐', '</div>📍');

// ALSO fix the broken images caused by double loading=lazy attributes in logistics section!
const brokenImage1 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Inventory systems" loading="lazy" decoding="async">';
const goodImage1 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Inventory systems">';

const brokenImage2 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain movement" loading="lazy" decoding="async">';
const goodImage2 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain movement">';

const brokenImage3 = '<img loading="lazy"\r\n                                 decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=1200&q=80&fm=webp"\r\n                                 alt="Supply chain movement and logistics flow"\r\n                                 loading="lazy"\r\n                                 decoding="async">';
const goodImage3 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=1200&q=80&fm=webp" alt="Supply chain movement and logistics flow">';

html = html.replace(brokenImage1, goodImage1);
html = html.replace(brokenImage2, goodImage2);
// using generic for broken3
html = html.replace(/<img loading="lazy"[^>]*alt="Supply chain movement and logistics flow"[^>]*>/g, goodImage3);

// For the rest of the file, clean up repeated loading="lazy" attributes which might have broken the parser
html = html.replace(/loading="lazy"\s*decoding="async"([^>]+)loading="lazy"[\s\n]*decoding="async"/g, 'loading="lazy" decoding="async" $1');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed encoding and duplicate lazy tags in index.html');