// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('.main-content');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    mainContent.classList.toggle('active');
});

// Close menu on clicking outside
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !nav.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        nav.classList.remove('active');
        mainContent.classList.remove('active');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.events-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});
