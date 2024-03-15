/**. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta
que el usuario escriba “salir” que terminará. */

let entradaUsuario;

do {
  entradaUsuario = prompt("Escriba algo (escriba 'salir' para terminar):");

  if (entradaUsuario !== null) {
    document.write("Eco: " + entradaUsuario + "<br>");
  }
} while (entradaUsuario !== "salir" && entradaUsuario !== null);
