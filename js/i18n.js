const translations = {
    es: {
        // Navigation
        'nav.home':    'Inicio',
        'nav.about':   'Acerca',
        'nav.events':  'Eventos',
        'nav.staff':   'Staff',
        'nav.blog':    'Blog',
        'nav.contact': 'Contacto',
        'nav.open':    'Abrir menú',
        'nav.close':   'Cerrar menú',
        'skip':        'Saltar al contenido principal',
        'lang.switch': 'Switch to English',

        // Footer
        'footer.tagline':     'Primera comunidad oficial de profesionales de SQA en República Dominicana.',
        'footer.links':       'Enlaces Rápidos',
        'footer.newsletter':  'Suscríbete a nuestro boletín',
        'footer.subscribe':   'Suscribir',
        'footer.email.ph':    'pedro@example.com',

        // Home
        'home.hero.line1': 'Calidad y Prueba',
        'home.hero.line2': 'de Software',
        'home.btn1':       'Conócenos',
        'home.btn2':       'Eventos',
        'home.timer':      'Próximo evento: Automatización con Katalon Studio.',
        'home.days':       'días',
        'home.hours':      'horas',
        'home.minutes':    'minutos',
        'home.seconds':    'segundos',

        // About page
        'about.header':   'Acerca de Nosotros',
        'about.sub':      'Conoce quiénes somos',
        'about.title':    'Acerca de Nosotros',
        'about.readmore': 'Leer Más',
        'about.creative': 'Creativos',
        'about.services': 'Servicios',

        // Events page
        'events.header': 'Nuestros Eventos',
        'events.sub':    'Talleres, charlas y conferencias',
        'events.desc':   'Introducción a la automatización con Katalon Studio.',

        // Staff page
        'staff.header': 'Nuestro Staff',
        'staff.sub':    'Co-fundadores y colaboradores',

        // Blog page
        'blog.header':   'Blog',
        'blog.sub':      'Artículos y recursos de QA',
        'blog.section':  'Blog',
        'blog.latest':   'Último',
        'blog.posts':    'Posts',
        'blog.readmore': 'Leer Más',

        // Contact page
        'contact.header':  'Contáctanos',
        'contact.sub':     'Queremos conocerte',
        'contact.title':   'Escríbenos, queremos conocerte',
        'contact.name':    'Tu nombre',
        'contact.email':   'Tu correo electrónico',
        'contact.message': 'Mensaje aquí',
        'contact.send':    'Enviar mensaje',
    },
    en: {
        // Navigation
        'nav.home':    'Home',
        'nav.about':   'About',
        'nav.events':  'Events',
        'nav.staff':   'Staff',
        'nav.blog':    'Blog',
        'nav.contact': 'Contact',
        'nav.open':    'Open menu',
        'nav.close':   'Close menu',
        'skip':        'Skip to main content',
        'lang.switch': 'Cambiar a Español',

        // Footer
        'footer.tagline':    'First official SQA professionals community in the Dominican Republic.',
        'footer.links':      'Quick Links',
        'footer.newsletter': 'Subscribe to our newsletter',
        'footer.subscribe':  'Subscribe',
        'footer.email.ph':   'your@email.com',

        // Home
        'home.hero.line1': 'Quality and Testing',
        'home.hero.line2': 'of Software',
        'home.btn1':       'About Us',
        'home.btn2':       'Events',
        'home.timer':      'Next event: Automation with Katalon Studio.',
        'home.days':       'days',
        'home.hours':      'hours',
        'home.minutes':    'minutes',
        'home.seconds':    'seconds',

        // About page
        'about.header':   'About Us',
        'about.sub':      'Get to know who we are',
        'about.title':    'About Us',
        'about.readmore': 'Read More',
        'about.creative': 'Creative',
        'about.services': 'Services',

        // Events page
        'events.header': 'Our Events',
        'events.sub':    'Workshops, talks and conferences',
        'events.desc':   'Introduction to automation with Katalon Studio.',

        // Staff page
        'staff.header': 'Our Staff',
        'staff.sub':    'Co-founders and collaborators',

        // Blog page
        'blog.header':   'Blog',
        'blog.sub':      'QA articles and resources',
        'blog.section':  'Blog',
        'blog.latest':   'Latest',
        'blog.posts':    'Posts',
        'blog.readmore': 'Read More',

        // Contact page
        'contact.header':  'Contact Us',
        'contact.sub':     'We want to meet you',
        'contact.title':   'Write to us, we want to meet you',
        'contact.name':    'Your name',
        'contact.email':   'Your email address',
        'contact.message': 'Message here',
        'contact.send':    'Send message',
    }
};

// ── Core i18n engine ──────────────────────────────────────────────────────────

function getLang() {
    return localStorage.getItem('qa-lang') ||
           (navigator.language.startsWith('en') ? 'en' : 'es');
}

function setLang(lang) {
    localStorage.setItem('qa-lang', lang);
    applyLang(lang);
}

function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-aria');
        if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // html lang attribute
    document.documentElement.lang = lang;

    // toggle button visual state
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
        btn.querySelectorAll('.lang-option').forEach(function (opt) {
            opt.classList.toggle('lang-active', opt.dataset.lang === lang);
        });
        btn.setAttribute('aria-label', dict['lang.switch'] || '');
    });
}

// ── Toggle handler ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
    const current = getLang();
    applyLang(current);

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const next = getLang() === 'es' ? 'en' : 'es';
            setLang(next);
        });
    });
});
