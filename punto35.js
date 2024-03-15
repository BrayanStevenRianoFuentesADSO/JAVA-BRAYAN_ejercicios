/**Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales
cada uno por $11.500. Una bomba en $1.168.000 y tres cajas de pernos cada uno
por $87.000. Después de pagar le sobran $91000. ¿Cuánto dinero tenía? */

let din_final = 91000
let llaves = 11500
let bomba = 1168000
let pernos = 87000 * 3

let din_ini = din_final + llaves + bomba + pernos

document.write("el jefe de obra tenia $", din_ini)