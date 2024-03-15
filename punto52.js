/**. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el
empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es
administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es
necesario conocer el total de horas trabajadas. */

let horas=parseInt(prompt("horas"))
let tipo=prompt("tipo trabajador planta (a) o administrativo (b)")

if(tipo == "a")
{
    document.write("su pago es de",horas*20000)
}
else if(tipo == "b")
{
    document.write("su pago es de",horas*10000)
}