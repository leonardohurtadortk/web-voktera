/**
 * VOKTERA — nav.js
 * Toggle accesible del dropdown "Servicios" del nav.
 * - Clic en el botón: abre/cierra (.open + aria-expanded).
 * - Clic fuera del dropdown: cierra.
 * - Teclado: Enter/Espacio alternan, Escape cierra y devuelve foco al botón.
 * - Escritorio (>=900px): hover por JS (mouseenter abre; mouseleave cierra si el foco no está dentro).
 * Sin dependencias. Cargar con <script src=".../nav.js" defer>.
 */
(function () {
  'use strict';

  function init() {
    var dropdowns = document.querySelectorAll('.nav-dropdown');
    if (!dropdowns.length) return;

    var desktopMQ = window.matchMedia('(min-width: 900px)');

    dropdowns.forEach(function (dropdown) {
      var toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (!toggle) return;

      function open() {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }

      function close() {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }

      function isOpen() {
        return dropdown.classList.contains('open');
      }

      // Clic en el botón: toggle
      toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        if (isOpen()) {
          close();
        } else {
          open();
        }
      });

      // Escritorio (>=900px): hover por JS. En móvil/táctil no se activa.
      dropdown.addEventListener('mouseenter', function () {
        if (desktopMQ.matches) open();
      });
      dropdown.addEventListener('mouseleave', function () {
        if (!desktopMQ.matches) return;
        if (dropdown.contains(document.activeElement)) return;
        close();
      });

      // Al salir el foco del dropdown (Tab, clic fuera), cerrar.
      dropdown.addEventListener('focusout', function (event) {
        var next = event.relatedTarget;
        if (!next || !dropdown.contains(next)) close();
      });

      // Teclado: Enter/Espacio ya disparan click en <button>,
      // pero prevenimos scroll de Espacio y manejamos Escape.
      toggle.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && isOpen()) {
          close();
          toggle.focus();
        }
      });

      // Escape dentro del panel cierra y devuelve foco al botón
      var panel = dropdown.querySelector('.nav-dropdown-panel');
      if (panel) {
        panel.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            close();
            toggle.focus();
          }
        });
      }
    });

    // Clic fuera: cierra cualquier dropdown abierto
    document.addEventListener('click', function (event) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('open');
          var toggle = dropdown.querySelector('.nav-dropdown-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();