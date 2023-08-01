  // Paso 1: Obtener el formulario y sus elementos
  const form = document.getElementById("form");
  const usuarioInput = document.getElementById("usuario");
  const passwordInput = document.getElementById("password");

  // Paso 2: Agregar un evento "submit" al formulario
  form.addEventListener("submit", function (event) {
    // Detenemos el envío del formulario
    event.preventDefault();

    // Paso 3: Validar usuario y contraseña
    const usuario = usuarioInput.value;
    const password = passwordInput.value;

    if (usuario === "Admin" && password === "Admin") {
      // Credenciales válidas, redirigimos a otra página
      window.location.href = "./modulos/home.html";
    } else {
      // Credenciales inválidas, mostramos mensaje de error
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });