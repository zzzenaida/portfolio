const fs = require('fs');
try {
  let text = fs.readFileSync('style.css', 'utf-8');
  let idx = text.indexOf("  line-height: 1.6;\r\n}\r\n  transform");
  if (idx === -1) {
    idx = text.indexOf("  line-height: 1.6;\n}\n  transform");
  }
  
  // if not found, find by the duplicate transform line
  if (idx === -1) {
     idx = text.indexOf("  transform: translateY(0);\r\n}\r\n.modal-close {");
     if (idx !== -1) {
        // go back to the previous brace
        idx = text.lastIndexOf("}", idx) + 1;
     }
  }

  if (idx !== -1) {
    fs.writeFileSync('style.css', text.slice(0, idx) + '\n');
    console.log("Fixed!");
  } else {
    // If not found properly, let's just parse line by line and stop at the offending duplicate line
    const lines = text.split('\n');
    let out = [];
    let stop = false;
    for (let i = 0; i < lines.length; i++) {
       if (lines[i].includes('transform: translateY(0);') && i > 800) {
          // stop here but let's see if previous line was }
          if (out[out.length-1].trim() === '}') {
             stop = true;
             break;
          }
       }
       out.push(lines[i]);
    }
    fs.writeFileSync('style.css', out.join('\n'));
    console.log("Fixed manually via loop");
  }
} catch (e) {
  console.log("Error:", e);
}