import re

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Normal gradients like background: linear-gradient(...); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
content = re.sub(
    r'background:\s*(?:linear-gradient|var\(--gradient-accent\))[^;]*;\s*-(?:webkit-)?background-clip:\s*text\s*;\s*-(?:webkit-)?text-fill-color:\s*transparent\s*;',
    r'color: var(--accent-teal);\n    background: none;\n    -webkit-text-fill-color: initial;',
    content, flags=re.DOTALL
)

# Overrides with !important
content = re.sub(
    r'background:\s*(?:linear-gradient|var\(--gradient-accent\))[^;]*!important;\s*-(?:webkit-)?background-clip:\s*text\s*!important;\s*-(?:webkit-)?text-fill-color:\s*transparent\s*!important;',
    r'color: var(--accent-teal) !important;\n    background: none !important;\n    -webkit-text-fill-color: initial !important;',
    content, flags=re.DOTALL
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)
