// Animated counters for the metrics section
(function () {
    const nums = document.querySelectorAll('.hp-metric-num');
    if (!nums.length) return;

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const step = 16;
        const increments = Math.ceil(duration / step);
        let current = 0;

        const timer = setInterval(function () {
            current += Math.ceil(target / increments);
            if (current >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                el.textContent = current.toLocaleString();
            }
        }, step);
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    nums.forEach(function (el) { observer.observe(el); });
}());
