/**. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que
imprima cual fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima
nota de 100, cuantos obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60 */

let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));

if (cantidadAlumnos < 1 || cantidadAlumnos > 100) {
  document.write("La cantidad de alumnos debe estar entre 1 y 100.");
} else {
  let notas = [];
  let notaMaxima = 0;
  let notaMinima = 100;
  let cantidadMaximas = 0;
  let cantidadA = 0;
  let cantidadB = 0;
  let cantidadC = 0;
  let cantidadD = 0;

  for (let i = 1; i <= cantidadAlumnos; i++) {
    let nota = parseInt(prompt("Ingrese la nota del alumno " + i + ":"));

    notas.push(nota);

    notaMaxima = Math.max(notaMaxima, nota);
    notaMinima = Math.min(notaMinima, nota);

    if (nota === 100) {
      cantidadMaximas++;
    }

    if (nota < 100 && nota >= 90) {
      cantidadA++;
    } else if (nota < 90 && nota >= 80) {
      cantidadB++;
    } else if (nota < 80 && nota >= 70) {
      cantidadC++;
    } else if (nota < 70 && nota >= 60) {
      cantidadD++;
    }
  }

  document.write("Nota más alta: " + notaMaxima + "<br>");
  document.write("Nota más baja: " + notaMinima + "<br>");
  document.write("Cantidad de alumnos con nota máxima de 100: " + cantidadMaximas + "<br>");
  document.write("Cantidad de alumnos con calificación 'a': " + cantidadA + "<br>");
  document.write("Cantidad de alumnos con calificación 'b': " + cantidadB + "<br>");
  document.write("Cantidad de alumnos con calificación 'c': " + cantidadC + "<br>");
  document.write("Cantidad de alumnos con calificación 'd': " + cantidadD + "<br>");
}

