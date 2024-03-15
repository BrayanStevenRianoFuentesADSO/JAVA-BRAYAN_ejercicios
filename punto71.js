/**. Escribir un programa que pida al usuario un número entero y muestre por pantalla
si es un número primo o no */

let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero > 1) {
  let esPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    document.write(numero + " es un número primo.");
  } else {
    document.write(numero + " no es un número primo.");
  }
} else {
  document.write("Por favor, ingrese un número entero mayor que 1.");
}



