import { getNavBar } from "./navBar.js";
const ticketMinus = document.getElementById("ticketMinus")
const ticketAdd = document.getElementById("ticketAdd")
const ticketAmount = document.getElementById("ticketAmount")
const ticketMax = document.getElementById("ticketMax")
const ticketBuy = document.getElementById('ticketBuy')

//Esto deberia estar seteado en la api y ser parte de la logica del endpoint de sumar ticket o similar
const totalTickets = 5


getNavBar('entradas')

document.addEventListener('click', function (event) {

    const navbarCollapse = document.getElementById('navbarTogglerDemo01');
    const togglerButton = document.querySelector('.navbar-toggler');
    /* console.log(event.target.closest('#navBarToggler') ? 'true' : 'false'); */
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

ticketMinus.addEventListener("click", () => {
    if (Number(ticketAmount.innerText) > 0) {
        ticketAdd.classList.contains('disabled') ? ticketMax.classList.add('d-none') : ''
        ticketAdd.classList.contains('disabled') ? ticketAdd.classList.remove('disabled') : ''
        ticketsCount(-1)
    }
    if (Number(ticketAmount.innerText) == 0) {
        ticketMinus.classList.add('disabled')
        ticketBuy.classList.add('disabled')
    }
}
)

ticketAdd.addEventListener("click", () => {
    if (Number(ticketAmount.innerText) < totalTickets) {
        ticketMinus.classList.contains('disabled') ? ticketMinus.classList.remove('disabled') : ''
        ticketBuy.classList.contains('disabled') ? ticketBuy.classList.remove('disabled') : ''
        ticketsCount(1)
    }
    if (Number(ticketAmount.innerText) == totalTickets) {
        ticketAdd.classList.add('disabled')
        ticketMax.classList.remove('d-none')
    }
})

/* ticketBuy.addEventListener('click', () => {

    //if (Number(ticketAmount.innerText) < 1) return alert("no hay ninguna cantidad de tickets seleccionada")

    const userLogged = JSON.parse(localStorage.getItem('userLogged'))
    const users = JSON.parse(localStorage.getItem('users'))

    const userFound = users.find(user => user.id == userLogged.id)
    userFound.tickets + Number(ticketAmount.innerText) < 5 ? userFound.tickets += Number(ticketAmount.innerText) : alert('Cantidad de entradas máximas permitida alcanzada')

    const newUsersArray = users.filter(user => user.id !== userFound.id)
    newUsersArray.push(userFound)
    console.log(newUsersArray, users);

}) */
ticketBuy.addEventListener('click', () => {
    const userLogged = JSON.parse(localStorage.getItem('userLogged'));
    let users = JSON.parse(localStorage.getItem('users'));

    const userFound = users.find(user => user.id === userLogged.id);

    if (!userFound) {
        console.log("Usuario no encontrado en la lista.");
        return;
    }

    const newUsersArray = users.filter(user => user.id !== userFound.id);
    userFound.tickets += Number(ticketAmount.innerText);

    if (userFound.tickets <= 5) {
        newUsersArray.push(userFound);
        // Ordenar el nuevo array por ID
        newUsersArray.sort((a, b) => a.id - b.id);
        localStorage.setItem('users', JSON.stringify(newUsersArray));
    } else {
        alert('Cantidad máxima de entradas permitidas alcanzada');
    }
});



function ticketsCount(operation) {
    ticketAmount.innerText = Number(ticketAmount.innerText) + operation
}