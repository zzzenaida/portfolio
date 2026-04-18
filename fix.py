import os

with open('style.css', 'rb') as f:
    text = f.read().decode('utf-8', errors='ignore')

clean_text = text.split('/* ------------------------------------------')[0]

sidebar_css = """
/* ------------------------------------------
   EXPERIENCIA - TARJETAS Y MODAL (SIDEBAR)
------------------------------------------ */
.experience-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}
.exp-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 40px 24px;
  text-align: center;
  cursor: pointer;
  transition: all .3s ease;
  box-shadow: var(--shadow);
}
.exp-card:hover {
  transform: translateY(-8px);
  border-color: var(--pink);
  box-shadow: var(--shadow-md);
}
.exp-card-icon {
  font-size: 2.5rem;
  color: var(--pink);
  margin-bottom: 16px;
}
.exp-card h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: var(--black);
}
.exp-card-click {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--pink);
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.8;
  transition: opacity .3s, gap .3s;
}
.exp-card:hover .exp-card-click {
  opacity: 1;
  gap: 12px;
}

/* Modales estilo barra lateral (offcanvas) */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: transparent;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s ease, visibility .4s;
  pointer-events: none;
}
.modal-overlay.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.1);
}
.modal-box {
  background: var(--white);
  width: 100%;
  max-width: 420px;
  height: 100vh;
  border-radius: 0;
  padding: 60px 40px;
  position: relative;
  transform: translateX(100%);
  transition: transform .4s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: -10px 0 30px rgba(0,0,0,0.05);
  overflow-y: auto;
  margin: 0;
}
.modal-overlay.active .modal-box {
  transform: translateX(0);
}
.modal-close {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gray);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all .2s;
  cursor: pointer;
}
.modal-close:hover {
  background: var(--pink);
  color: var(--white);
}
.modal-date {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pink);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 20px;
}
.modal-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--black);
  margin-bottom: 4px;
}
.modal-company {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--muted);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.modal-desc {
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
}
"""

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(clean_text.replace('\x00', '') + sidebar_css)
