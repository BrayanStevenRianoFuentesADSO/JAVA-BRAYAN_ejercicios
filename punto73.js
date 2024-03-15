/**Escribir un programa en el que se pregunte al usuario por una frase y una letra, y
muestre por pantalla el número de veces que aparece la letra en la frase. */

let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese una letra:");

if (frase.length > 0 && letra.length === 1) {
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === letra) {
      contador++;
    }
  }

  document.write("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
} else {
  document.write("Por favor, ingrese una frase y una letra válidas.");
}
