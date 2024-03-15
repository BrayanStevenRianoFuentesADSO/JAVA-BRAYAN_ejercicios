/**Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.
Calcular el monto total de la venta, según la cantidad de artículos solicitados
durante el día. */

let libro=10000
let cuaderno=7550
let lapicero=5550

let cant_libro = parseInt(prompt("que cantidad de libros quiere comprar"))
let cant_cuader = parseInt(prompt("que cantidad de cuadernos quiere comprar"))
let cant_lapic = parseInt(prompt("que cantidad de lapiceros quiere comprar"))

let venta=cant_cuader*cuader+cant_libro*libro+cant_lapic*lapicero

document.write("segun la cantidad de articulos solicitados el monto es de", venta)
