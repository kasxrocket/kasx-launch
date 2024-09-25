// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode

    // Apply the saved theme on load
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Set the initial state of the toggle checkbox
    if (currentTheme === 'light') {
        themeToggle.checked = true; // If the theme is light, the toggle is checked
    }

    // Add an event listener to the toggle switch
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            // Switch to light mode
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); // Save the user's preference
        } else {
            // Switch to dark mode
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Save the user's preference
        }
    });
});
