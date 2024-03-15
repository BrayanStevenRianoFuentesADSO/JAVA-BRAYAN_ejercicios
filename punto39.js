/**Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de
pintura Considere que se cobra por m2 y realice el código que representen el
algoritmo que le permita ir generando presupuestos para cada cliente. */

let precio_metro = parseInt(prompt("precio por metro"))

let metros = parseInt(prompt("cantidad de metros"))
let precio_final=precio_metro*metros

document.write("el costo por este trabajo es de $",precio_final)