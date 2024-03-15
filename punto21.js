/*Escribir un programa que calcule el volumen de un elipsoide.*/

let a = parseInt(prompt("ingrese el valor de a"))
let b = parseInt(prompt("ingrese el valor de b"))
let c = parseInt(prompt("ingrese el valor de c"))

let pi = 3.1416

let volumen = ((4 / 3) * pi * a * b * c)

document.write("el volumen de el elipsoide es de ", volumen)