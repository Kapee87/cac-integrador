import { getNavBar } from "./navBar.js";

let indexSection = document.getElementById('indexSection')
//esto se reemplazará con lógica que traiga info de la api
localStorage.setItem('user', JSON.stringify({
    'nombre': 'Román',
    'apellido': 'Generic',
    'id': 1,
    'email': 'generic@roman.com',
    'telefono': '0800777112',
    'fechaNacimiento': '01/01/2001',
    'direccion': 'Burzaco, Buenos Aires',
    'tickets': 1,
    'avatar': 'https://this-person-does-not-exist.com/img/avatar-gen0d9b10262ec0413214290d1bb2a74feb.jpg'
}))

//user temporal para renderizar datos dinamicos(vienen desde el localstorage)
let user = JSON.parse(localStorage.getItem('user'))

getNavBar('index')
getIndexSection(user)

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



function getIndexSection(user) {
    console.log(user);
    indexSection.innerHTML = `
    <div>
    <img src="${user.avatar || '../assets/bocaIcon.png'}" class="avatar" alt="imagen de usuario">
        <p> Bienvenid@ ${user?.nombre}!</p>
        <p>
            ${user.tickets > 0 ?
            `Tenés ${user?.tickets} entrada para el próximo partido!`
            : ''
        }
        </p>
        <button type="button" class="btn btn-outline-warning">
        <a href="/pages/entradas.html" class="text-body">revisar</a>
        </button>
    </div>
    `
}


