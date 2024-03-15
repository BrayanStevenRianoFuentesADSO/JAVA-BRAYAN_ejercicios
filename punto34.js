/**Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de
un depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el
tiempo en segundos. */

let radio = parseInt(prompt("ingrese la medida del radio del recipiente"))
let altura = parseInt(prompt("ingrese la medida de la altura del recipiente"))

let caudal = parseInt(prompt("ingrese el caudal en m/s"))
let pi = 3.1416;

let volumen = (pi * altura * radio * radio)

let tiempo=volumen/caudal

document.write("el volumen es de ", volumen," <br>")
document.write("el tiempo estimado para el llenado de el recipiente es de ",tiempo)





