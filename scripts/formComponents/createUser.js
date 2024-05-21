import { getFields } from "./formValidation.js";


export default function createUser() {
    console.log('creating user from separate function');
    const { name, email, password, province, image, phone, virgin } = getFields()
    localStorage.setItem('user', JSON.stringify({
        'id': Math.round(Math.random() + 1000),
        'nombre': name,
        'email': email,
        'telefono': phone,
        'contraseña': password,
        'direccion': province,
        'avatar': image,
        'canchaVirgen': virgin
    }))
    console.log(localStorage.getItem('user'));
}