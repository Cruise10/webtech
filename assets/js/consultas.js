
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.main nav');

// Toggle the 'active' class on the navigation menu when the toggle button is clicked
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});