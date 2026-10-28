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

/**
 * VOKTERA — Lógica de teléfonos y botones flotantes (T-059 + universal)
 * - En táctil: el href="tel:" funciona nativo en TODOS los <a href="tel:">.
 * - En desktop (mouse fino): intercepta el click en cualquier tel:, copia el número y muestra un toast.
 * - Sube el padding del footer de 96px a 160px para acomodar dos botones flotantes en columna.
 */
(function () {
  'use strict';

  var TEL = '+34911266011';

  function initFloat() {
    document.querySelectorAll('footer[style*="padding-bottom:96px"]').forEach(function (footer) {
      footer.style.paddingBottom = '160px';
    });

    var isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!isDesktop.matches) return;

    // Handler universal: cualquier <a href="tel:..."> en el sitio
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="tel:"]');
      if (!link) return;
      event.preventDefault();
      var tel = link.getAttribute('href').replace(/^tel:/, '');
      copyAndToast(tel || TEL, link);
    });
  }

  function copyAndToast(text, sourceEl) {
    var toast = document.querySelector('.float-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'float-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    function showToast(msg) {
      // 1) Poner el texto PRIMERO para que offsetWidth mida el ancho real
      toast.textContent = msg;
      toast.classList.add('show');
      // 2) Ahora posicionar con dimensiones reales
      if (sourceEl) {
        var rect = sourceEl.getBoundingClientRect();
        var toastW = toast.offsetWidth;
        var toastH = toast.offsetHeight;
        var margin = 8;
        // Horizontal: centrado sobre el icono, clamp a los bordes
        var left = rect.left + rect.width / 2;
        left = Math.max(toastW / 2 + margin, Math.min(window.innerWidth - toastW / 2 - margin, left));
        // Vertical: SIEMPRE arriba del icono; si no cabe, abajo
        var top = rect.top - toastH - 8;
        if (top < margin) top = rect.bottom + 8;
        toast.style.top = top + 'px';
        toast.style.left = left + 'px';
      }
      // 3) Resetear timer
      clearTimeout(toast._timer);
      toast._timer = setTimeout(function () {
        toast.classList.remove('show');
      }, 3000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Teléfono copiado: 911 26 60 11');
      }).catch(function () {
        showToast('Llama al 911 26 60 11');
      });
    } else {
      var tmp = document.createElement('textarea');
      tmp.value = text;
      tmp.style.position = 'absolute';
      tmp.style.left = '-9999px';
      document.body.appendChild(tmp);
      tmp.select();
      try {
        document.execCommand('copy');
        showToast('Teléfono copiado: 911 26 60 11');
      } catch (e) {
        showToast('Llama al 911 26 60 11');
      }
      document.body.removeChild(tmp);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloat);
  } else {
    initFloat();
  }
})();