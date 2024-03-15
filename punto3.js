// Escribir un programa que pida al usuario dos números y muestre por pantalla su
// división, si el divisor es cero el programa debe mostrar un error, se debe manejar
// mediante excepciones y el mensaje debe ser personalizado.

let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");
let division = num1 / num2;

if (num1 == 0 || num2 == 0) {
  document.write("no se permite dividir numeros entre 0")
}

else {
  document.write("el resultado de dividir los dos numeros es ", division)
}
