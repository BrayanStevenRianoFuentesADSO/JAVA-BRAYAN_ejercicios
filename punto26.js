/**Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit. */


/**(°C × 9/5) + 32 */
let centi = parseFloat(prompt("ingrese la temperatura en grados celcius"))

let fahrenheit = (centi * 9 / 5) + 32

document.write(centi, " grados centigrados son ", fahrenheit, " grados fahrenheit")