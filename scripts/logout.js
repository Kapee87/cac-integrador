const logoutBtn = document.getElementById('logoutBtn').addEventListener('click', () => {
    logout()
})

export function logout() {
    localStorage.removeItem('userLogged')
    window.location = '/'
}

