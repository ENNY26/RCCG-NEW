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

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;

// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}


// JavaScript for the services slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');
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
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll functionality
    let autoScroll = setInterval(() => {
        slider.scrollLeft += slider.offsetWidth;
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
            slider.scrollLeft = 0;
        }
    }, 3000);

    // Stop auto-scroll on manual scroll
    slider.addEventListener('mousedown', () => {
        clearInterval(autoScroll);
    });
});



/*
function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning, brethren";
    } else if (hours < 18) {
        greeting = "Good afternoon, brethren";
    } else {
        greeting = "Good evening, brethren";
    }

    return greeting;
}

document.getElementById('greeting-text').innerText = getGreeting();
*/
