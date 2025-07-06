// acordeon.js
// Convierte cada <li> de <ol> en un acordeón <details>.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('ol').forEach(ol => {
    if (ol.dataset.acordeon) return;          // evita doble procesamiento
    ol.dataset.acordeon = 'ok';

    [...ol.children].forEach((li, i) => {
      if (li.querySelector('details')) return; // ya protegido

      const wrapper = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = `Ejercicio ${i + 1}`;
      wrapper.appendChild(summary);

      const contenido = document.createElement('div');
      contenido.innerHTML = li.innerHTML;      // mantiene el MathJax
      wrapper.appendChild(contenido);

      li.innerHTML = '';                       // limpia el <li>
      li.appendChild(wrapper);
    });
  });
});
