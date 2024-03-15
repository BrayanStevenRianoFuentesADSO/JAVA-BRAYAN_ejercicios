/**Consideramos la asignación de una calificación literal a un rango dado de
calificaciones numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10
Asignar la calificación de A equivale a Excelente 8.1 a 9 Asignar la calificación de A
equivale a Muy bien 7.5 a 8 Asignar la calificación de A equivale a Bien Menor a 7.5
asignar la calificación de NA No Aprobado. */

let calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));

let calificacionLiteral;

if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
  calificacionLiteral = "A - Excelente";
} else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9) {
  calificacionLiteral = "A - Muy bien";
} else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8) {
  calificacionLiteral = "A - Bien";
} else if (calificacionNumerica < 7.5) {
  calificacionLiteral = "NA - No Aprobado";
} else {
  calificacionLiteral = "Calificación no válida";
}

document.write("Calificación numérica: " + calificacionNumerica.toFixed(2) + "<br>");
document.write("Calificación literal: " + calificacionLiteral + "<br>");
