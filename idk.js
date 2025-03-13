// script.js

// Hamburger menü működése mobilon

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}


// Eseményfigyelő hozzáadása a hamburger gombhoz
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});


// Betöltéskor lekéri a szerver állapotot
document.addEventListener("DOMContentLoaded", fetchServerStatus);

// Hamburger menü eseményfigyelő hozzáadása
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    console.log('Hamburger gombra kattintottál!');
});

/*// Szerver állapot dinamikus lekérése (példa egy API hívásra)
async function fetchServerStatus() {
    const serverInfo = document.getElementById('server-info');

    try {
        // Itt kellene egy valódi API végpontot megadni
        let response = await fetch('https://example.com/api/server-status');
        let data = await response.json();

        if (data.online) {
            serverInfo.innerHTML = `<p style="color: green;">Online</p>
                                    <p>Jelenlegi játékosok: ${data.players}/100</p>`;
        } else {
            serverInfo.innerHTML = `<p style="color: red;">Offline</p>`;
        }
    } catch (error) {
        serverInfo.innerHTML = `<p style="color: red;">Hiba történt a szerver állapot lekérésekor.</p>`;
    }
}
*/ 