document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;
    const logo = document.getElementById('logo');
    const header = document.querySelector('header');
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    const lightLogoSrc = 'images/logo-light.png';
    const darkLogoSrc = 'images/logo-dark.png';

    // Dark Mode Logic (Previously Existing)
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
        logo.src = darkLogoSrc;
    }

    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
            logo.src = darkLogoSrc;
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            logo.src = lightLogoSrc;
            localStorage.setItem('darkMode', null);
        }
    });

    // Burger Menu Toggle
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Header Scroll Logic (Previously Existing)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    });
});