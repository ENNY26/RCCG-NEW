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


