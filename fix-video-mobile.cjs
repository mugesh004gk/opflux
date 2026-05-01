const fs = require('fs');
const path = require('path');

const stylesheetPath = path.join(__dirname, 'src', 'style.css');
let css = fs.readFileSync(stylesheetPath, 'utf8');

const hiddenMobileRule = `.hero-vid-bg {\r\n    display: none !important; /* Hide heavy video on mobile, fallback to static poster if needed, or simply let the CSS background take over */\r\n  }`;
const hiddenMobileRuleLf = `.hero-vid-bg {\n    display: none !important; /* Hide heavy video on mobile, fallback to static poster if needed, or simply let the CSS background take over */\n  }`;
const mobileVisibleRule = `.hero-vid-bg {\r\n    animation: none;\r\n    display: block;\r\n    opacity: 0.25;\r\n  }`;
const mobileVisibleRuleLf = `.hero-vid-bg {\n    animation: none;\n    display: block;\n    opacity: 0.25;\n  }`;

let updatedCss = css.replace(hiddenMobileRule, mobileVisibleRule);
updatedCss = updatedCss.replace(hiddenMobileRuleLf, mobileVisibleRuleLf);

if (updatedCss === css) {
	const currentMobileRule = `.hero-vid-bg {\r\n    animation: none;\r\n  }`;
	const currentMobileRuleLf = `.hero-vid-bg {\n    animation: none;\n  }`;
	updatedCss = updatedCss.replace(currentMobileRule, mobileVisibleRule);
	updatedCss = updatedCss.replace(currentMobileRuleLf, mobileVisibleRuleLf);
}

if (updatedCss !== css) {
	fs.writeFileSync(stylesheetPath, updatedCss, 'utf8');
	console.log('Mobile hero video rule updated in src/style.css');
} else {
	console.log('No mobile hero video rule changes were needed');
}
