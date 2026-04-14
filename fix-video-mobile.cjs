const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace('.hero-vid-bg {\r\n        display: none !important; /* Hide heavy video on mobile, fallback to static poster if needed, or simply let the CSS background take over */\r\n    }', '');
// Try unix newline as well
css = css.replace('.hero-vid-bg {\n        display: none !important; /* Hide heavy video on mobile, fallback to static poster if needed, or simply let the CSS background take over */\n    }', '');

fs.writeFileSync('style.css', css, 'utf8');
console.log('Video un-hidden');
