/**Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a
pagar por cada producto y el total de la compra.
 */

let prod1 = parseInt("ingrese el valor del producto 1")
let prod2 = parseInt("ingrese el valor del producto 2")
let prod3 = parseInt("ingrese el valor del producto 3")
let prod4 = parseInt("ingrese el valor del producto 4")
let prod5 = parseInt("ingrese el valor del producto 5")

let desc1 = prod1 + prod2 * 0.5
let desc2 = prod3 + prod4 * 0.2
let total = ((prod1 + prod2) - desc1) + ((prod3 + prod4) - desc2) + prod5

document.write("")
