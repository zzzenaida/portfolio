const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
const start = html.indexOf('<section id="experiencia"');
const end = html.indexOf('</section>', start) + 10;
console.log(html.substring(start, end));
