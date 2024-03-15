/**Escribir un programa que pida al usuario un número entero y muestre por pantalla
un triángulo rectángulo como el de más abajo, de altura el número introducido */

let altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));

if (altura > 0) {
  for (let i = 1; i <= altura; i++) {
    let linea = '';

    for (let j = 1; j <= altura - i; j++) {
      linea += ' ';
    }

    for (let k = 1; k <= i; k++) {
      linea += '*';
    }

    document.write(linea + "<br>");
  }
} else {
  document.write("Por favor, ingrese un número entero positivo válido.");
}
