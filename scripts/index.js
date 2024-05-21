import { getNavBar } from "./navBar.js";

getNavBar('index')

document.addEventListener('click', function (event) {
    const navbarCollapse = document.getElementById('navbarTogglerDemo01');
    const togglerButton = document.querySelector('.navbar-toggler');
    console.log(event.target.closest('#navBarToggler') ? 'true' : 'false');
    // Si se hizo clic en un enlace o en el botón de toggler
    if (event.target.closest('.nav-link') || event.target.closest('.navbar-toggler') || event.target.closest('#navContainer')) {
        const isExpanded = togglerButton.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            // Cerrar el colapso si está abierto
            const collapseInstance = new bootstrap.Collapse(navbarCollapse);
            collapseInstance.hide();
        }
    }
});


const timeoutSesion = setTimeout(() => {
    console.log('timeout');
    localStorage.removeItem('userLogged')
    window.location.replace('/')
    clearTimeout(timeoutSesion)
}, "300000")
const timeoutWarning = setTimeout(() => {
    let user = JSON.parse(localStorage.getItem('userLogged'))
    !user ? '' : alert('La sesión está por terminar')
}, "24000")