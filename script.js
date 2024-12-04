document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const body = document.body;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');

    // If user previously enabled dark mode
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', null);
        }
    });
});