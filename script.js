// Toggle button Select
const toggleThemeButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
//theme loader
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-modee');
    toggleThemeButton.innerHTML = '<i id="theme-icon" class="fas fa-sun"></i> Light Mode';
}
// Event listener for the toggle button
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    //update button text based on theme
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.innerHTML = '<i id="theme-icon" class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeButton.innerHTML = '<i id="theme-icon" class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});