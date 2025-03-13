// Hamburger menü működése
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Eseményfigyelő hozzáadása a DOM betöltődésekor
document.addEventListener("DOMContentLoaded", function() {
    // Hamburger gomb eseményfigyelő hozzáadása
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Hibakereséshez: ellenőrizd, hogy a hamburger gombra kattintás működik-e
    hamburger.addEventListener('click', function() {
        console.log('Hamburger gombra kattintottál!');
    });
});