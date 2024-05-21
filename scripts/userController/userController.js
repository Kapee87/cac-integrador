export const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users, localStorage.getItem('users'));

export function addUser(newUser) {
    // Generar un nuevo ID
    const newId = users.length ? Math.max(users.map(user => user.id)) + 1 : 1;
    newUser.id = newId;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users))
}

