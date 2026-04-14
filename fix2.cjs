const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const map = {
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
  'ðŸ“Œ': '📍'
};
// Use simple replace for each string block, since Node strings are UTF16 this operates naturally
for (let key in map) {
    html = html.split(key).join(map[key]);
}

html = html.replace('ðŸ“', '📐');
html = html.replace('1.2rem; flex-shrink: 0;\">📐</div>', '1.2rem; flex-shrink: 0;\">📍</div>');
html = html.replace('</div>📐', '</div>📍');

// ALSO fix the broken images caused by double loading=lazy attributes in logistics section!
const b1 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Inventory systems" loading="lazy" decoding="async">';
const g1 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Inventory systems">';

const b2 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain movement" loading="lazy" decoding="async">';
const g2 = '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain movement">';

html = html.replace(b1, g1);
html = html.replace(b2, g2);
html = html.replace(/<img[^>]*alt="Supply chain movement and logistics flow"[^>]*>/g, '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581092919535-7146ff1a5909?auto=format&fit=crop&w=1200&q=80&fm=webp" alt="Supply chain movement and logistics flow">');
html = html.replace(/<img[^>]*alt="Warehouse operations and supply coordination"[^>]*>/g, '<img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1586528116493-8f70e3d44f42?auto=format&fit=crop&w=1600&q=80&fm=webp" alt="Warehouse operations and supply coordination">');

fs.writeFileSync('index.html', html, 'utf8');
