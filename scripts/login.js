function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'pago.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
