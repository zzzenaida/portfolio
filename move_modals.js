const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Find where section closes
let match = `
      </div>
    </div>
  </section>

  <!-- Modales de Experiencia -->`;

let replacement = `
      </div>
    </div>

  <!-- Modales de Experiencia -->`;

html = html.replace(match, replacement);

let modalsEndMatch = `efficiente.</p>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ FORMACIÓN ═══════════════════ -->`;

let modalsEndReplacement = `efficiente.</p>
      </div>
    </div>
  </div>
  </section>

  <!-- ═══════════════════ FORMACIÓN ═══════════════════ -->`;

html = html.replace(modalsEndMatch, modalsEndReplacement);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("HTML modified");