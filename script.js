document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;
    const logo = document.getElementById('logo');
    const header = document.querySelector('header');

    const lightLogoSrc = 'images/logo-light.png';
    const darkLogoSrc = 'images/logo-dark.png';

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');

    // If user previously enabled dark mode
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
        logo.src = darkLogoSrc;
    }

    // Toggle dark mode
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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    });
});