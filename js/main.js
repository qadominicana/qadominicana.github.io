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
    const countDownDate = new Date('Dec 31, 2026 18:00:00').getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('#dias').textContent = days;
        document.querySelector('#horas').textContent = hours;
        document.querySelector('#minutos').textContent = minutes;
        document.querySelector('#segundos').textContent = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector('#dias').textContent = '0';
            document.querySelector('#horas').textContent = '0';
            document.querySelector('#minutos').textContent = '0';
            document.querySelector('#segundos').textContent = '0';
        }
    }, 1000);
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
        document.getElementById(tabName).style.display = 'block';
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
