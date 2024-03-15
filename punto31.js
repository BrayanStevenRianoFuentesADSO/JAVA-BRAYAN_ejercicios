/**Se requiere calcular la distancia entre dos puntos, realizar el código que permita
hallar la solución, por favor utilizar funciones matemáticas para ello.:
a. rc((x2-x1)^2 + (y2-y1)^2). */

let x=parseFloat(prompt("ingrese el valor de x"))
let y=parseFloat(prompt("ingrese el valor de y"))

let opera_distancia=(Math.sqrt((x*2-x*1)**2+(y*2-y*1)**2))

document.write("la distancia entre los dos puntos es de ",opera_distancia)