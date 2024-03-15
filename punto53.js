/*Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los
resultados de: Iva, Subtotal y Total de la compra de los artículos.*/ 

let precioProducto1 = parseFloat(prompt("Ingrese el precio del producto 1:"));
let precioProducto2 = parseFloat(prompt("Ingrese el precio del producto 2:"));
let precioProducto3 = parseFloat(prompt("Ingrese el precio del producto 3:"));
let precioProducto4 = parseFloat(prompt("Ingrese el precio del producto 4:"));
let precioProducto5 = parseFloat(prompt("Ingrese el precio del producto 5:"));

let subtotal = precioProducto1 + precioProducto2 + precioProducto3 + precioProducto4 + precioProducto5;
let tasaIVA = 0.16;
let iva = subtotal * tasaIVA;
let total = subtotal + iva;

document.write("Subtotal: $" + subtotal.toFixed(2));
document.write("IVA (16%): $" + iva.toFixed(2));
document.write("Total: $" + total.toFixed(2) );
