/* import { getNavBar } from "./navBar.js"; */
import { validate } from "./formComponents/formValidation.js";
let FormData = document.getElementById('registerForm');
import createUser from "./formComponents/createUser.js";

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

