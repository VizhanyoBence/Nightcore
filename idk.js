// Hamburger menü működése mobilon
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
}

// Szerver állapot dinamikus lekérése (példa egy API hívásra)
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

// Betöltéskor lekéri a szerver állapotot
document.addEventListener("DOMContentLoaded", fetchServerStatus);
