import { getNavBar } from "./navBar.js";
import { users } from "./userController/userController.js";

const loginForm = document.getElementById('loginForm')

getNavBar('login')

document.addEventListener('click', function (event) {

    const navbarCollapse = document.getElementById('navbarTogglerDemo01');
    const togglerButton = document.querySelector('.navbar-toggler');
    // console.log(event.target.closest('#navBarToggler') ? 'true' : 'false');

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


loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target[0].value, event.target[1].value);

    const userFound = users.find(user => user.email == event.target[0].value && user.contraseña == event.target[1].value)
    console.log(userFound);
    if (!userFound) {
        return alert('Credenciales inválidas')
    } else {
        localStorage.setItem('userLogged', JSON.stringify(userFound))
        window.location = '/'
    }
})
