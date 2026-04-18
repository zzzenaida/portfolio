const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace the end of the section correctly
let search = `      </div>
    </div>

  <!-- Modales de Experiencia -->`;

let replacement = `      </div>
  <!-- Modales de Experiencia -->`;

html = html.replace(search, replacement);

let search2 = `  </div>
  </section>`;

let replacement2 = `  </div>
  </div>
  </section>`;

html = html.replace(search2, replacement2);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Modals moved into container");