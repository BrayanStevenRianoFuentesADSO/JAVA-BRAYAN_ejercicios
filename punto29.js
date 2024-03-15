/**Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5
puntos. */
let suma_notas = 0

for (let cont = 1; cont <= 4; cont++) {
  let nota = parseFloat(prompt(`ingrese la nota del examen ${cont}`))
  suma_notas += nota;
}

document.write("la nota de el alumno es de ", (suma_notas) / 4)

