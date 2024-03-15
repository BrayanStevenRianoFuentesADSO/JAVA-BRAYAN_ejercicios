/**En un colegio, se necesita hacer una selección de basquetbol que represente al
colegio, para lo cual es requisito indispensable que los postulantes sean menores o
iguales a 19 años, con una estatura de más de 175 cm y el peso tiene que estar
entre los 80 kg y 75. */

let edad = parseInt(prompt("Ingrese la edad del estudiante:"));
let estatura = parseFloat(prompt("Ingrese la estatura del estudiante (en cm):"));
let peso = parseFloat(prompt("Ingrese el peso del estudiante (en kg):"));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
  document.write("El estudiante cumple con los requisitos y puede formar parte del equipo de básquetbol.");
} else {
  document.write("El estudiante no cumple con los requisitos para formar parte del equipo de básquetbol.");
}
