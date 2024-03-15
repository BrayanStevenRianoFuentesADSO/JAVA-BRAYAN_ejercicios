/**Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos. */

let edad_act = parseInt(prompt("edad inicial de la madre"))
let edad_hijo = parseInt(prompt("edad del hijo"))

let edad_resultado = edad_act - edad_hijo;

document.write("la edad a la que dio a luz a su hijo fue a los ", edad_resultado, " años")