// . Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseInt(prompt("ingrese la medida del radio"))
let altura = parseInt(prompt("ingrese la medida de la altura"))
let pi = 3.1416;


// 2π r h + 2π r²

let area = (2 * pi * radio * altura + 2 * pi * radio * radio)
let volumen = (pi * altura * radio * radio)

document.write("la medida del area es ", area, " y la del volumen es", volumen)