// Highlight active nav link based on current page
(function () {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu-links a').forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('nav-active');
        }
    });
}());

const navButton = document.querySelector('.navigation-button');
const navMenu = document.querySelector('.navigation-menu');
const navBackdrop = document.querySelector('.nav-backdrop');
const navCloseBtn = document.querySelector('.nav-close-btn');

function openMenu(event) {
    navButton.classList.add('active');
    navMenu.classList.add('active');
    navBackdrop.classList.add('active');
    navButton.setAttribute('aria-expanded', 'true');
    navMenu.inert = false;
    document.body.style.overflow = 'hidden';
    event.stopPropagation();
}

function closeMenu() {
    navButton.classList.remove('active');
    navMenu.classList.remove('active');
    navBackdrop.classList.remove('active');
    navButton.setAttribute('aria-expanded', 'false');
    navMenu.inert = true;
    document.body.style.overflow = '';
}

navButton.addEventListener('click', openMenu);
navCloseBtn.addEventListener('click', closeMenu);
navBackdrop.addEventListener('click', closeMenu);

navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
});

// Countdown timer — only on pages that have the timer elements
if (document.querySelector('#dias')) {
    const EVENTOS = [
        { fecha: new Date('2026-06-13T18:00:00'), nombre: 'Monthly Talk — 13 de Junio' },
        { fecha: new Date('2026-07-11T18:00:00'), nombre: 'Testing 4 All — 11 de Julio' },
        { fecha: new Date('2026-08-08T18:00:00'), nombre: 'Monthly Talk — 8 de Agosto' },
        { fecha: new Date('2026-09-12T18:00:00'), nombre: 'Monthly Talk — 12 de Septiembre' },
        { fecha: new Date('2026-10-10T18:00:00'), nombre: 'Monthly Talk — 10 de Octubre' },
        { fecha: new Date('2026-11-14T18:00:00'), nombre: 'Monthly Talk — 14 de Noviembre' },
        { fecha: new Date('2026-12-12T18:00:00'), nombre: 'Monthly Talk — 12 de Diciembre' },
    ];

    const titleEl  = document.querySelector('#timer-event-name');
    const diasEl   = document.querySelector('#dias');
    const horasEl  = document.querySelector('#horas');
    const minEl    = document.querySelector('#minutos');
    const segEl    = document.querySelector('#segundos');

    let intervalo = null;

    function proximoEvento() {
        return EVENTOS.find(function (e) { return e.fecha.getTime() > Date.now(); }) || null;
    }

    function iniciarContador() {
        if (intervalo) clearInterval(intervalo);

        const evento = proximoEvento();

        if (!evento) {
            if (titleEl) titleEl.textContent = '¡Hasta el próximo año!';
            diasEl.textContent = horasEl.textContent = minEl.textContent = segEl.textContent = '0';
            return;
        }

        if (titleEl) titleEl.textContent = 'Próximo evento: ' + evento.nombre;

        intervalo = setInterval(function () {
            const distancia = evento.fecha.getTime() - Date.now();

            if (distancia <= 0) {
                clearInterval(intervalo);
                iniciarContador();
                return;
            }

            diasEl.textContent  = Math.floor(distancia / (1000 * 60 * 60 * 24));
            horasEl.textContent = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minEl.textContent   = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            segEl.textContent   = Math.floor((distancia % (1000 * 60)) / 1000);
        }, 1000);
    }

    iniciarContador();
}

// Sticky nav on scroll
window.addEventListener('scroll', function () {
    const wrapperNav = document.getElementById('wrapperNav');
    const nav = document.getElementById('nav');

    if (document.documentElement.scrollTop > 80) {
        wrapperNav.classList.add('nav-sticky');
        nav.classList.add('nav-sticky-inner');
    } else {
        wrapperNav.classList.remove('nav-sticky');
        nav.classList.remove('nav-sticky-inner');
    }
});

// Event tabs — only on eventos.html
if (document.querySelector('.tablinks')) {
    document.querySelectorAll('.tablinks').forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
            openTab(evt, btn.dataset.tab);
        });
    });

    function openTab(evt, tabName) {
        document.querySelectorAll('.tabcontent').forEach(function (el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.tablinks').forEach(function (el) {
            el.classList.remove('active');
        });
        document.getElementById(tabName).style.display = 'flex';
        evt.currentTarget.classList.add('active');
    }
}

// Swiper — only on staff.html
if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 500,
            modifier: 5,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}
