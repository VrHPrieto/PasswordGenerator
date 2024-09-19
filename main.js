let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres =
    "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz123456789";
const caracteresEspeciales = "!@#$%^&*()";

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    //console.log(numeroDigitado);
    if (numeroDigitado < 8) {
        alert("La contraseña debe tener mas de 8 digitos");
        return;
    }

    let password = "";
    for (let i = 0; i < numeroDigitado - 1; i++) {
        let caracterAleatorio =
            cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        //console.log(caracterAleatorio);
        password += caracterAleatorio;
    }

    // Añadir el carácter especial
    let caracterEspecialAleatorio =
        caracteresEspeciales[
        Math.floor(Math.random() * caracteresEspeciales.length)
        ];

    // Insertar el carácter especial en una posición aleatoria dentro de la contraseña
    let posicionAleatoria = Math.floor(Math.random() * numeroDigitado);
    password =
        password.slice(0, posicionAleatoria) +
        caracterEspecialAleatorio +
        password.slice(posicionAleatoria);

    //console.log(`Password Generada: ${password}`);
    contrasena.value = password;
    validarSeguridad(password);
}

function limpiarCaja() {
    contrasena.value = "";
    mensaje.textContent = "";

}

function validarSeguridad(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial) {
        mensaje.textContent = "La contraseña es fuerte";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "La contraseña es débil. Asegúrate de incluir mayúsculas, minúsculas, números y caracteres especiales.";
        mensaje.style.color = "red";
    }
}



/*
Cambios realizados:
Se separaron los caracteres especiales en una nueva variable caracteresEspeciales para facilitar su manejo.
Se genera la contraseña normal pero con un espacio reservado para un carácter especial. El bucle ahora genera solo numeroDigitado - 1 caracteres.
Añadimos un carácter especial aleatorio: Se selecciona un carácter especial al azar de caracteresEspeciales.
Posición aleatoria para el carácter especial: Luego insertamos este carácter especial en una posición aleatoria dentro de la contraseña generada.
Con este enfoque, la contraseña siempre tendrá al menos un carácter especial, además de letras y números.

Se utilizo el metodo .slice() para insertar el carácter especial en una posición aleatoria dentro de la contraseña. Lo que haces es dividir la contraseña en dos partes: una parte antes de la posición aleatoria y otra parte después, y luego insertas el carácter especial en medio.

Este código corta la contraseña en dos, inserta el carácter especial en la posición deseada y luego junta las partes con el nuevo carácter.
*/


