/**Escribir un programa que calcule la longitud y el área de una circunferencia. */

let diametro = parseInt(prompt("ingrese la medida del diametro"))
let radio = parseInt(prompt("ingrese la medida del radio"))
let pi = 3.1416;
let area = (pi * radio * radio)
let longitud = (diametro * pi)

document.write("la longitud de la circunferencia es de", longitud, " y su area es de ", area)

