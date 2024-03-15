/**Escribir un programa que pida al usuario un número entero positivo y muestre por
pantalla todos los números impares desde 1 hasta ese número separados por
coma */

let numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (numero > 0) {
  let numerosImpares = [];

  for (let i = 1; i <= numero; i += 2) {
    numerosImpares.push(i);
  }

  document.write("Números impares hasta " + numero + ": " + numerosImpares.join(', ') + "<br>");
} else {
  document.write("Por favor, ingrese un número entero positivo válido.");
}
