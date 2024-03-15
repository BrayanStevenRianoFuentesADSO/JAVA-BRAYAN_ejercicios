/**Escribir un programa que pida al usuario un número entero y muestre por consola
un triángulo rectángulo como el de más abajo. */

let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero > 0) {
  for (let i = 1; i <= numero; i++) {
    let linea = '';

    for (let j = 1; j <= i; j++) {
      linea += '*';
    }

    document.write(linea + "<br>");
  }
} else {
  document.write("Por favor, ingrese un número entero positivo válido.");
}

