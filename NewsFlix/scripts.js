// scripts.js

// Aquí puedes añadir funcionalidades como hover dinámico o interacciones
console.log("Welcome to Newsflix!");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simula la validación (esto se conectaría a un servidor real en producción)
    if (username === "Anton" && password === "12345" ||
        username === "Julissa" && password === "12345" ||
        username === "Marcelo" && password === "12345") {
        alert("Inicio de sesión exitoso. ¡Bienvenido a Newsflix!");
        window.location.href = "inicio.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
});



