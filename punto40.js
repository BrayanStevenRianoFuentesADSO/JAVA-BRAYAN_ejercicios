/**Una empresa que contrata personal requiere determinar la edad de las personas
que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el
año en que nacieron. Realice el código que representen el algoritmo para
solucionar este problema. */

let anio_act=2024
let mes_act=3
let dia_act=8

let anio = parseInt(prompt("ingrese su año de nacimiento"))
let mes = parseInt(prompt("ingrese su mes de nacimiento"))
let dia = parseInt(prompt("ingrese su dia de nacimiento"))

let anio_edad= anio_act-anio;

if (anio>anio_act)
{
    document.write("verifique el año ingresado")
}
else if(mes<=mes_act || dia <= dia_act)
{
    document.write("su edad es de ",anio_edad," años")
}
 else{   
     document.write("su edad es de ",anio_edad-1," años")
 }