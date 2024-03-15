/**En una tienda de HELADO da un descuento por compra a sus clientes con
membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A,
tipo B y tipo C. Los descuentos son los siguientes: Tipo A 10% de descuento Tipo B
15% de descuento Tipo C 20% de descuento */

let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
let montoCompra = parseFloat(prompt("Ingrese el monto total de la compra:"));

let descuentoA = 0.10;
let descuentoB = 0.15;
let descuentoC = 0.20;

let descuento = 0;

if (tipoMembresia === 'A') {
  descuento = montoCompra * descuentoA;
} else if (tipoMembresia === 'B') {
  descuento = montoCompra * descuentoB;
} else if (tipoMembresia === 'C') {
  descuento = montoCompra * descuentoC;
} else {
  document.write("Tipo de membresía no válido.");
}

let totalConDescuento = montoCompra - descuento;

if (descuento > 0) {
  document.write("Monto original: $" + montoCompra.toFixed(2) + "<br>");
  document.write("Descuento aplicado (" + tipoMembresia + "): $" + descuento.toFixed(2) + "<br>");
  document.write("Total con descuento: $" + totalConDescuento.toFixed(2) + "<br>");
} else {
  document.write("No se aplicó ningún descuento. Verifique el tipo de membresía ingresado.");
}
