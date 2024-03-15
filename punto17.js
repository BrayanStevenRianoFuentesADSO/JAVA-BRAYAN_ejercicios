/*Escribir un programa que calcule el volumen de una esfera*/

let radio = parseInt(prompt("ingrese la medida del radio"))
let pi = 3.1416;
let volumen = (4 / 3 * pi * radio * radio * radio)

document.write("el volumen de la esfera es de ", volumen)