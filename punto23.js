/**  Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por
segundo.
*/


/**divide el valor de velocidad entre 3,6 */



let kmh = parseFloat(prompt("ingrese la velocidad en km/h"))

let ms = kmh / 3.6

document.write("la velocidad de su auto en m/s es de ", ms)