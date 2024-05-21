import createUser from "./formComponents/createUser.js";
import { validate } from "./formComponents/formValidation.js";
import { getNavBar } from "./navBar.js";
let FormData = document.getElementById('registerForm');

getNavBar('registro')

document.addEventListener('click', function (event) {

    const navbarCollapse = document.getElementById('navbarTogglerDemo01');
    const togglerButton = document.querySelector('.navbar-toggler');
    // console.log(event.target.closest('#navBarToggler') ? 'true' : 'false');
    // Si se hizo clic en un enlace o en el botón de toggler
    if (event.target.closest('.nav-link') || event.target.closest('.navbar-toggler') || event.target.closest('#navContainer')) {
        const isExpanded = togglerButton.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            const collapseInstance = new bootstrap.Collapse(navbarCollapse);
            collapseInstance.hide();
        }
    }
});

FormData.addEventListener('submit', (e) => {
    e.preventDefault();
    validate(e)
        ? createUser()
        : console.error('El formulario no es valido')
})

FormData.addEventListener('change', (event) => {
    event.preventDefault();
    validate(event)
})

