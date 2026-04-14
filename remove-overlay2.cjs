const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const heroBeforePattern = /\.hero::before\s*\{\n\s*content:\s*'';\n\s*position:\s*absolute;\n\s*inset:\s*0;\n\s*background:\s*url\('\.\/public\/hero-bg\.png'\)\s*no-repeat\s*center;\n\s*background-size:\s*cover;\n\s*z-index:\s*0;\n\s*\}/g;

css = css.replace(heroBeforePattern, '');
// Try carriage return
const heroBeforePattern2 = /\.hero::before\s*\{\r\n\s*content:\s*'';\r\n\s*position:\s*absolute;\r\n\s*inset:\s*0;\r\n\s*background:\s*url\('\.\/public\/hero-bg\.png'\)\s*no-repeat\s*center;\r\n\s*background-size:\s*cover;\r\n\s*z-index:\s*0;\r\n\s*\}/g;

css = css.replace(heroBeforePattern2, '');

fs.writeFileSync('style.css', css, 'utf8');
