/**Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando
como constante el valor de una moneda. */

let peso_col = parseInt(prompt("ïngrese el numero de pesos colombianos a convertir"))

const euro=peso_col*0.00023

const dolar=peso_col*0.00026

document.write(peso_col," colombianos equivalen a ",euro, "euros y ",dolar, "dolares")



