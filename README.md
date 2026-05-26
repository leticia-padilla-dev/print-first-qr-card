# Bar Jubilats Serra · Print-first poster and QR cards

Proyecto web print-first para un negocio local. El repo reúne dos artefactos listos para imprimir:

- un **cartel promocional A4** para eventos o campañas
- una **hoja A4 con 4 tarjetas QR** para recortar y colocar en mesa

La idea del proyecto no es “hacer una web corporativa”, sino usar HTML/CSS/React para producir piezas físicas controladas desde navegador.

## Rutas

- `/` entrada del proyecto con acceso a cada artefacto
- `/poster` vista previa del cartel promocional
- `/print/qr-card` hoja de tarjetas QR lista para imprimir

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages
- Vitest

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

## Impresión

1. Abrir la ruta correspondiente en el navegador.
2. Pulsar el botón de impresión o usar `Ctrl/Cmd + P`.
3. En el diálogo de impresión:
   - Tamaño: **A4**
   - Márgenes: **Ninguno**
   - Desactivar **Encabezados y pies de página**
   - Activar **Gráficos de fondo**
4. Imprimir o guardar como PDF.

## Publicación

La build está preparada para GitHub Pages bajo:

`https://leticia-padilla-dev.github.io/print-first-qr-card/`
