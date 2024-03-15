/**Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los
lados sean positivos: área triangulo= lado * lado */

let largo = prompt("ingrese la medida del largo del rectangulo")

let ancho = prompt("ingrese la medida del largo del rectangulo")

if (largo <=0 || ancho<=0)
{
    document.write("verifique la medida antes de ingresar")
}

else{
    document.write("la medida del area del rectangulo es de ", largo * ancho)
}
