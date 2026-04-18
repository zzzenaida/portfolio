with open('style.css', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# find where the good part ends and the garbage begins
split_marker = "  font-size: 1rem;\n  color: var(--text);\n  line-height: 1.6;\n}\n"
idx = content.find(split_marker)

if idx != -1:
    clean_content = content[:idx + len(split_marker)]
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(clean_content)
    print("Fixed!")
else:
    print("Marker not found")