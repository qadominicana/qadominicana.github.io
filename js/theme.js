(function () {
    'use strict';

    var STORAGE_KEY = 'qa-theme';
    var ICON_DARK   = 'fa-moon';
    var ICON_LIGHT  = 'fa-sun';

    function getSystemPref() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function getTheme() {
        return localStorage.getItem(STORAGE_KEY) || getSystemPref();
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        /* Icono del toggle */
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            var icon = btn.querySelector('i');
            if (!icon) return;
            if (theme === 'dark') {
                icon.classList.remove(ICON_DARK);
                icon.classList.add(ICON_LIGHT);
                btn.setAttribute('aria-label', 'Cambiar a modo claro');
            } else {
                icon.classList.remove(ICON_LIGHT);
                icon.classList.add(ICON_DARK);
                btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
            }
        });

    }

    function toggleTheme() {
        var next = getTheme() === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }

    /* Aplicar antes de DOMContentLoaded para evitar flash de tema */
    applyTheme(getTheme());

    document.addEventListener('DOMContentLoaded', function () {
        /* Re-aplicar para actualizar estado inicial (DOM ya disponible) */
        applyTheme(getTheme());

        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.addEventListener('click', toggleTheme);
        });

        /* Sincronizar si el sistema cambia preferencia mientras la página está abierta */
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(getSystemPref());
            }
        });
    });
}());
