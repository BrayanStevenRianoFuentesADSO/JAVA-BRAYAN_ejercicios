/*Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
tributar o no. */

let edad = prompt("ingrese su edad")

let ingresos = prompt("ingrese sus ingresos mensuales")

if (edad > 16 && ingresos >= 1000) {
  document.write("debe tributar")
}

else {
  document.write("no debe tributar")
}