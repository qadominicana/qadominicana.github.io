(function () {
    const viewport = document.querySelector('.sc-carousel-viewport');
    if (!viewport) return;

    const track   = viewport.querySelector('.staff-cards');
    const cards   = Array.from(track.querySelectorAll('.staff-card'));
    const btnPrev = document.querySelector('.sc-carousel-prev');
    const btnNext = document.querySelector('.sc-carousel-next');
    const dotsEl  = document.querySelector('.sc-carousel-dots');

    const GAP = 20;
    let current = 0;
    let dots = [];

    function visibleCount() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function maxIndex() {
        return Math.max(0, cards.length - visibleCount());
    }

    function cardWidth() {
        return cards[0].getBoundingClientRect().width;
    }

    function buildDots() {
        dotsEl.innerHTML = '';
        dots = [];
        const total = maxIndex() + 1;
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'sc-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Ir al slide ' + (i + 1));
            dot.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(dot);
            dots.push(dot);
        }
    }

    function goTo(index) {
        current = Math.max(0, Math.min(index, maxIndex()));
        const offset = current * (cardWidth() + GAP);
        track.style.transform = 'translateX(-' + offset + 'px)';
        btnPrev.disabled = current === 0;
        btnNext.disabled = current >= maxIndex();
        dots.forEach(function (d, i) {
            d.classList.toggle('active', i === current);
        });
    }

    btnPrev.addEventListener('click', function () { goTo(current - 1); });
    btnNext.addEventListener('click', function () { goTo(current + 1); });

    // Swipe táctil
    let startX = 0;
    viewport.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
        const delta = startX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) goTo(current + (delta > 0 ? 1 : -1));
    }, { passive: true });

    // Reconstruir al cambiar tamaño
    window.addEventListener('resize', function () {
        buildDots();
        goTo(Math.min(current, maxIndex()));
    });

    buildDots();
    goTo(0);
}());
