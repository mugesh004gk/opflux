import re
import sys

# Read style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make a backup
with open('style_backup.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Color mapping strategy:
# Dark Mode -> Light Mode
# Old Navy Backgrounds -> Light Grey/Beige (#F5F7F9)
# Old Bright Teal Accent -> New Dark Teal (#114B5F)
# Old White Text -> Old Navy (for text)

replacements = [
    # root variables
    (r'--bg-primary: #0B1F33;', '--bg-primary: #F5F7F9;'),
    (r'--bg-secondary: #0A1625;', '--bg-secondary: #EAECEE;'),
    (r'--bg-tertiary: #07111D;', '--bg-tertiary: #DFE2E5;'),
    (r'--accent-teal: #2EC4B6;', '--accent-teal: #114B5F;'),
    (r'--text-primary: #ffffff;', '--text-primary: #0B1F33;'),
    (r'--text-secondary: #cbd5e1;', '--text-secondary: #334155;'),
    (r'--text-muted: #94a3b8;', '--text-muted: #64748b;'),
    (r'--glass-bg: rgba\(255, 255, 255, 0\.03\);', '--glass-bg: rgba(255, 255, 255, 0.7);'),
    (r'--glass-border: rgba\(46, 196, 182, 0\.15\);', '--glass-border: rgba(17, 75, 95, 0.2);'),
    
    # HEX colors
    (r'#0B1F33', '#F5F7F9'),
    (r'#0A1625', '#EAECEE'),
    (r'#07111D', '#DFE2E5'),
    (r'#2EC4B6', '#114B5F'),
    (r'#2ec4b6', '#114B5F'),
    (r'#ffffff', '#0B1F33'),
    (r'#FFFFFF', '#0B1F33'),
    
    # Hardcoded background hexes
    (r'#050a14', '#F5F7F9'), # hero base
    (r'#081729', '#EAECEE'), # workflow card active
    (r'#071522', '#DFE2E5'), # cta background
    
    # RGBA values (backgrounds)
    (r'rgba\(11, ?31, ?51', 'rgba(245, 247, 249'),
    (r'rgba\(10, ?22, ?37', 'rgba(234, 236, 238'),
    (r'rgba\(7, ?17, ?29', 'rgba(223, 226, 229'),
    (r'rgba\(8, ?18, ?35', 'rgba(234, 236, 238'),
    (r'rgba\(6, ?14, ?28', 'rgba(223, 226, 229'),
    (r'rgba\(5, ?10, ?20', 'rgba(245, 247, 249'),
    
    # RGBA values (accents) -> dark teal (17, 75, 95)
    (r'rgba\(46, ?196, ?182', 'rgba(17, 75, 95'),
    
    # White text/elements to dark text/elements
    (r'color: #fff;', 'color: var(--text-primary);'),
    (r'color: #ffffff;', 'color: var(--text-primary);'),
    (r'background: #fff;', 'background: var(--text-primary);'),
    (r'rgba\(255, ?255, ?255, ?0\.06\)', 'rgba(0, 0, 0, 0.04)'),
    (r'rgba\(255, ?255, ?255, ?0\.01\)', 'rgba(0, 0, 0, 0.01)'),
    (r'rgba\(255, ?255, ?255, ?0\.02\)', 'rgba(0, 0, 0, 0.02)'),
    (r'rgba\(255, ?255, ?255, ?0\.04\)', 'rgba(0, 0, 0, 0.03)'),
    (r'rgba\(255, ?255, ?255, ?0\.05\)', 'rgba(0, 0, 0, 0.05)'),
    (r'rgba\(255, ?255, ?255, ?0\.03\)', 'rgba(0, 0, 0, 0.02)'),
    (r'rgba\(255, ?255, ?255, ?0\.65\)', 'rgba(11, 31, 51, 0.65)'),
    (r'rgba\(255, ?255, ?255, ?0\.7\)', 'rgba(11, 31, 51, 0.7)'),
    
    # Fixing shadows and specific elements that might look bad in light mode
    (r'box-shadow: 0 16px 34px rgba\(0, ?0, ?0, ?0\.2\)', 'box-shadow: 0 16px 34px rgba(11, 31, 51, 0.1)'),
    (r'box-shadow: 0 16px 38px rgba\(0, ?0, ?0, ?0\.35\)', 'box-shadow: 0 16px 38px rgba(11, 31, 51, 0.15)'),
    (r'box-shadow: 0 8px 32px 0 rgba\(0, ?0, ?0, ?0\.3\)', 'box-shadow: 0 8px 32px 0 rgba(11, 31, 51, 0.1)'),
]

for old, new in replacements:
    css = re.sub(old, new, css)

# Fix h2 gradient which was #FFFFFF to #B0C4DE
css = re.sub(r'linear-gradient\(180deg, #FFFFFF 0%, #B0C4DE 100%\)', 'linear-gradient(180deg, #0B1F33 0%, #114B5F 100%)', css)

# Make hero h1 darker
css = re.sub(r'linear-gradient\(135deg, #ffffff 0%, #a5f3eb 100%\)', 'linear-gradient(135deg, #0B1F33 0%, #114B5F 100%)', css)

# Make metrics gradient darker
css = re.sub(r'linear-gradient\(135deg, var\(--accent-teal\) 0%, #ffffff 100%\)', 'linear-gradient(135deg, var(--accent-teal) 0%, #0B1F33 100%)', css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Color palette updated to light mode with dark teal accents.")
