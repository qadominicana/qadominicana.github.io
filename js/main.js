var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;

//TimeDown
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

function openMenu(event) {

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

    event.preventDefault();
    event.stopImmediatePropagation();
}

function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
}
navButton.addEventListener('click', openMenu, false);

win.addEventListener('click',closeMenu, false);



//counter time
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.querySelector("#dias").textContent = days;
    document.querySelector("#horas").textContent = hours;
    document.querySelector("#minutos").textContent = minutes;
    document.querySelector("#segundos").textContent = seconds;


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


//menu stick
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    const wrapperNav = document.getElementById("wrapperNav").style;
    const nav = document.getElementById("nav").style;

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        wrapperNav.position = 'fixed';
        wrapperNav.zIndex = '999';
        wrapperNav.top = '0';
        wrapperNav.left = '0';
        wrapperNav.background = '#2196F3';
        nav.marginTop = '0px';

    } else {
        wrapperNav.position = 'static';
        wrapperNav.background = 'transparent';
        nav.marginTop = '40px';
    }

}

// Tab
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

<!-- Initialize Swiper -->

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 500,
        modifier: 5,
        slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

