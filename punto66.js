/**Escribir un programa que pregunte al usuario una cantidad a invertir, el interés
anual y el número de años, y muestre por pantalla el capital obtenido en la
inversión cada año que dura la inversión. */

let cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual en porcentaje:"));
let numeroAnios = parseInt(prompt("Ingrese el número de años de la inversión:"));

if (cantidadInvertir > 0 && interesAnual > 0 && numeroAnios > 0) {
  let capitalObtenido;

  for (let i = 1; i <= numeroAnios; i++) {
    capitalObtenido = cantidadInvertir * (1 + interesAnual / 100) ** i;
    document.write("Año " + i + ": Capital obtenido $" + capitalObtenido.toFixed(2) + "<br>");
  }
} else {
  document.write("Por favor, ingrese valores válidos para la cantidad a invertir, el interés anual y el número de años.");
}
