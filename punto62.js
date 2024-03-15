/**. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10
veces. */


let palabra = prompt("Ingrese una palabra:");

for (let i = 1; i <= 10; i++) {
  document.write("Palabra " + i + ": " + palabra + "<br>");
}
