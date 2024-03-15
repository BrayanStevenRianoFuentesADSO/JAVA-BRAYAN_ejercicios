/**. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final. */
let parcial1 = parseFloat(prompt("ingrese la nota del parcial 1"))
let parcial2 = parseFloat(prompt("ingrese la nota del parcial 2"))
let parcial3 = parseFloat(prompt("ingrese la nota del parcial 3"))
let examen = parseFloat(prompt("ingrese la nota del examen final"))
let trabajo = parseFloat(prompt("ingrese la nota del trabajo final"))

let prom_parciales = (parcial1 + parcial2 + parcial3) / 3
let prom_final = (prom_parciales * 0.55) + (examen * 0.3) + (trabajo * 0.15)




document.write("el promedio final es ", prom_final)

