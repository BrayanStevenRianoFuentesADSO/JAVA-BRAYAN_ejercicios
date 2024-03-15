/**Escriba un algoritmo que permita calcular el área, debe preguntar que figura
geométrica desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio */

let figura=("de que figura quiere hallar el area: triangulo(a) circulo (b)")

if (figura =="a"){
    let base=("ingrese la base del triangulo")
    let altura=("ingrese la altura del triangulo")

    let area_t=base*altura/2

    document.write("el area de su triangulo es de ",area_t)
}

else if (figura =="b"){
    let radio=("ingrese el radio del circulo")
    let pi=3.1416

    let area_c=pi*radio*radio
    document.write("el area de su triangulo es de ",area_c)
}