
const validate = (event) => {
    const { name, email, password, province, image } = getFields()
    //limpiamos mensajes de error previos
    let errorMessages = document.querySelectorAll(".errorMessage");
    errorMessages.forEach(function (element) {
        element.remove();
    });




    // Validar el nombre de al menos 4 caracteres
    if (name.length < 4) {
        displayErrorMessage("floatingName", "El nombre debe tener al menos 4 caracteres.");
    }

    // Validar el correo electrónico con regex (o expresion regular)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayErrorMessage("floatingEmail", "El correo electrónico no tiene un formato válido.");
    }

    // Validar la contraseña
    if (password.length < 6) {
        displayErrorMessage("floatingPassword", "La contraseña debe tener al menos 6 caracteres.");
    }

    // Validar que se haya seleccionado una provincia
    if (province === "default") {
        displayErrorMessage("floatingSelect", "Por favor, selecciona una provincia.");
    }

    // Validar que la imagen sea una URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(image)) {
        displayErrorMessage("floatingUrl", "La imagen debe ser una URL válida.");
    }

    // Si todas las validaciones pasan, enviar el formulario
    if (document.querySelectorAll(".errorMessage").length === 0) {
        return true
    }


    function displayErrorMessage(fieldId, message) {
        const registerSection = document.getElementById('registerSection')
        const field = document.getElementById(fieldId);
        const errorMessage = document.createElement("p");

        registerSection.classList.add('mt-5')
        errorMessage.className = "errorMessage text-danger";
        errorMessage.textContent = message;
        field.parentNode.insertBefore(errorMessage, field.nextSibling);

        // Eliminar el mensaje de error después de 10 segundos
        setTimeout(function () {
            errorMessage.remove();
            registerSection.classList.remove('mt-5')
        }, 10000);
    }
    // Limpiamos mensajes de error anteriores después de 10 segundos
    const timeout = setTimeout(function () {
        let errorMessages = document.querySelectorAll(".errorMessage");
        errorMessages.forEach(function (element) {
            element.remove();
        });
        clearTimeout(timeout)
    }, 10000);
}

const getFields = () => {
    // Obtener los valores de los campos
    const name = document.getElementById("floatingName").value;
    const email = document.getElementById("floatingEmail").value;
    const password = document.getElementById("floatingPassword").value;
    const phone = document.getElementById("floatingPhone").value;
    const province = document.getElementById("floatingSelect").selectedOptions[0].text;
    const image = document.getElementById("floatingUrl").value;
    const virgin = document.getElementById("flexSwitchCheckDefault").value;

    return { name, email, password, province, image, virgin, phone }
}

export { validate, getFields }