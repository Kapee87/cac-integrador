export const users = JSON.parse(localStorage.getItem('users')) || []
export const userLogged = JSON.parse(localStorage.getItem('userLogged')) || null
/* console.log(users, localStorage.getItem('users')); */

export function addUser(newUser) {
    
    const lastId = users.length ? Math.max(...users.map(user => user.id)) : 0;
    newUser.id = lastId + 1;
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

