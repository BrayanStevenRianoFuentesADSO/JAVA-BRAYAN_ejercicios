/**Escribir un programa que pida al usuario una palabra y luego muestre por pantalla
una a una las letras de la palabra introducida empezando por la última. */

let palabra = prompt("Ingrese una palabra:");
let longitud = palabra.length;

if (longitud > 0) {
  document.write("Letras de la palabra en orden inverso:<br>");

  for (let i = longitud - 1; i >= 0; i--) {
    document.write(palabra.charAt(i) + "<br>");
  }
} else {
  document.write("Por favor, ingrese una palabra válida.");
}


