const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
    toggle.checked = true;
}

toggle.addEventListener('change', function () {
    let theme = toggle
