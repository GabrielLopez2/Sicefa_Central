/* global Swal */

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const usuarios = [
        {"usuario": "Admin1", "contrasena": "Admin1", "Sucursal": "Sucursal Centro", "nombre": "Admin"},
    ];

    const usuario = usuarios.find(user => user.usuario === username && user.contrasena === password);

    if (usuario) {
        // Almacenar nombre de usuario en una cookie
        document.cookie = `nombreUsuario=${usuario.nombre}; path=/`;

        // Redireccionar a la página principal de usuario tipo admin
        window.location.href = "./modulos/home.html";
    } else {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: 'Por favor, verifica tus datos.'
        });
    }
});





