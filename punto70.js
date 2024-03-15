/**Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña
correcta. */

const contraseñaCorrecta = "secreta"; // Puedes cambiar la contraseña según tus preferencias
let contraseñaIngresada;

do {
  contraseñaIngresada = prompt("Ingrese la contraseña:");

  if (contraseñaIngresada !== contraseñaCorrecta) {
    document.write("Contraseña incorrecta. Inténtelo nuevamente.<br>");
  }
} while (contraseñaIngresada !== contraseñaCorrecta);

document.write("¡Contraseña correcta! Acceso concedido.");
