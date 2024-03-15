/**Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
programa que ingresando el costo de los medicamentos calcule el descuento y el
precio final. */

let precio = parseInt(prompt("ingrese el precio de sus medicamentos"))
let desc = 0.1 * precio;
let precio_final = precio - desc;

document.write("el descuento por su compra es de ", desc, " el precio final es ", precio_final)

