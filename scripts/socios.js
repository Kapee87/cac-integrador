import { getNavBar } from "./navBar.js";
let user = JSON.parse(localStorage.getItem('userLogged'))
let sociosSection = document.getElementById('sociosSection')

getNavBar('socios')
getSociosSection(user)

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

function getSociosSection(user) {
    console.log(!user);
    if (!user) {
        alert('Debe iniciar sesión')
        return window.location = '/'
    }
    sociosSection.innerHTML = `
    <div class="card mb-3 p-4" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 avatar">
            <img src="${user?.avatar || '../assets/bocaIcon.png'}" class="object-fit-contain" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${user?.nombre}</h5 >
                <ul>
                    <li>
                        Número de socio: ${user?.id}
                    </li>
                    <li>
                        Lugar de residencia : ${user?.direccion}
                    </li>
                    <li>
                    Correo electrónico : ${user?.email}
                    </li>
                    <li>
                    Teléfono : ${user?.telefono}
                    </li>
                    <li>
                    Entradas reservadas : ${user?.tickets}
                    </li>
                    </>
                    <p class="card-text"><small class="text-body-secondary">Acciones de socio?(próximamente)</small></p>
            </div >
        </div >
    </div >
</div >
        `
}