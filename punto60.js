/**. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de
cursos que lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso,
pero si la cantidad de cursos es mayor que 6 el pago será únicamente de
$1.200.000. */

let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

let costoPorCursoMenos6 = 2000000; // $2.000.000 por cada curso si la cantidad es menor que 6
let costoPorCursoMayor6 = 1200000; // $1.200.000 por cada curso si la cantidad es mayor que 6

let costoTotal;

if (cantidadCursos <= 6) {
  costoTotal = cantidadCursos * costoPorCursoMenos6;
} else {
  costoTotal = cantidadCursos * costoPorCursoMayor6;
}

document.write("Cantidad de cursos: " + cantidadCursos + "<br>");
document.write("Costo total: $" + costoTotal.toFixed(2) + "<br>");
