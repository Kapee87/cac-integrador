
export function getNavBar(section) {
    let user = JSON.parse(localStorage.getItem('userLogged'))
    let navDiv = document.getElementById('navbar')
    const isLogged = !user ? false : true

    navDiv.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="navContainer">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
            id="navBarToggler">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
            Boca Juniors
            <img src='../assets/bocaIcon.png' height='20px' />
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link ${section == 'index' ? 'active' : ''} " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item  ${!isLogged ? 'disabledLink' : ''} ">
                    <a class="nav-link ${section == 'socios' ? 'active' : ''}" href="/pages/socios.html" >Socios</a>
                </li>
                <li class="nav-item ${!isLogged ? 'disabledLink' : ''}">
                <a class="nav-link ${section == 'entradas' ? 'active' : ''}" href="/pages/entradas.html" >Entradas</a>
                </li>
                <li class="nav-item ${!isLogged ? '' : 'd-none'}">
                <a class="nav-link ${section == 'registro' ? 'active' : ''}" href="/pages/registro.html" >Registro</a>
                </li>
                <li class="nav-item">
                    <a 
                    class="nav-link ${section == 'login' ? 'active' : ''} ${!isLogged ? '' : 'd-none'}" href="/pages/login.html" > 
                    🔑 Iniciar sesión
                    </a>
                </li>
                <li class="nav-item" >
                    <button class="nav-link ${section == 'logout' ? 'active' : ''} ${!isLogged ? 'd-none' : ''}" id="logoutBtn"> 
                    🚪 Cerrar sesión
                    </button>
                </li>
            </ul>
            ${user?.avatar ? `
            <div class="col-md-2 nav-avatar">
                <img src="${user?.avatar}" class="object-fit-contain" alt="...">
            </div>
            `: ''}
            
        </div>
    </div>
</nav>
    `
}

