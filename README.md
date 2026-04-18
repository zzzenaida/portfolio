# Portfolio — Zenaida Pontes

Sitio web estático de presentación profesional para empresas de comunicación.

## Preview segura (sin tocar la versión actual)

Se creó una copia editable en `preview-behance-v2/` con rediseño estilo Behance.

- Versión actual estable: `index.html`
- Versión nueva en prueba: `preview-behance-v2/index.html`

### Cómo comparar

1. Abre `index.html` para ver la versión estable.
2. Abre `preview-behance-v2/index.html` para ver la versión rediseñada.

### Cómo volver atrás

Si no te convence la nueva versión, simplemente elimina la carpeta `preview-behance-v2/`.
La web original no se modifica.

## Estructura

```
/
├── index.html              ← Página principal
├── style.css               ← Estilos
├── main.js                 ← Interactividad
└── potfolio aut/
    ├── Portfolio Zenaida Pontes.pdf
    ├── enlaces.pdf
    └── ZENAIDA JORDÁ.png
```

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En *Source*, selecciona **Deploy from a branch → main → / (root)**.
4. En unos minutos el sitio estará disponible en:
   `https://TU_USUARIO.github.io/NOMBRE_REPO/`

## Personalizar el contenido

Abre `index.html` y reemplaza los marcadores de posición:

| Marcador | Dónde |
|---|---|
| `tu@email.com` | Sección Contacto |
| `tu-perfil` en LinkedIn | Sección Contacto |
| `@tu_usuario` en X/Twitter | Sección Contacto |
| `tu-usuario` en GitHub | Sección Contacto |
| Fechas y empresas en Experiencia | Sección `#experiencia` |
| Títulos y centros en Formación | Sección `#formacion` |
| Títulos y descripciones en Trabajos | Sección `#trabajos` |
| Datos en las tarjetas estadísticas | Sección `#sobre-mi` |
| Formulario Formspree | Atributo `action` del `<form>` — [obtén tu ID gratis](https://formspree.io) |

## Tecnologías

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, responsive)
- JavaScript vanilla (Intersection Observer, nav scroll)
- Google Fonts (Playfair Display + Inter)
- Font Awesome 6 (iconos)
