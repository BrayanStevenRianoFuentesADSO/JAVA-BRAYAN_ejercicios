/*Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos.*/


let edad = prompt("ingrese su edad")

if (edad < 0) {
  document.write("ese numero no esta permitido")
}

if (edad >= 18) {
  document.write("es mayor de edad")
}

if (edad > 0 && edad <= 17) {
  document.write("es menor de edad")
}