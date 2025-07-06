AOS.init({
    duration: 1000, // animation duration
    easing: 'ease-in-out', // easing option
});

document.addEventListener('DOMContentLoaded', function () {
    let icon = document.querySelector('.menu_icon');
    let ul = document.querySelector('.nav_links');
    let bar = document.querySelector('#bar');
    let navLinks = document.querySelectorAll('.nav_links a');

    icon.addEventListener('click', () => {
        ul.classList.toggle('showData');
        if (ul.classList.contains('showData')) {
            bar.className = 'ri-close-line';
        } else {
            bar.className = 'ri-menu-line';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                ul.classList.remove('showData');
                bar.className = 'ri-menu-line';
            }
        });
    });
});

var loader = document.getElementById("preloader");
window.addEventListener('load', () => {
    loader.style.display = "none"
})