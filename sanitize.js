const fs = require('fs');
let text = fs.readFileSync('style.css', 'utf-8');
text = text.replace(/\0/g, ''); // Remove all null bytes just in case
if (!text.includes('line-height: 1.6')) {
    text += '  line-height: 1.6;\n}\n';
}
fs.writeFileSync('style.css', text, 'utf-8');
console.log("CSS file fully sanitized and restored.");
