/**. Escribir un programa que pida al usuario un número entero positivo y muestre por
pantalla la cuenta atrás desde ese número hasta cero separados por comas. */

let numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (numero > 0) {
  let cuentaAtras = [];

  for (let i = numero; i >= 0; i--) {
    cuentaAtras.push(i);
  }

  document.write("Cuenta atrás desde " + numero + " hasta 0: " + cuentaAtras.join(', ') + "<br>");
} else {
  document.write("Por favor, ingrese un número entero positivo válido.");
}

