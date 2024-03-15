/**Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora. */

let nombre = prompt("ingrese su nombre")
let horas = prompt("numero de horas de trabajo")
let pago_hr = prompt("pago por hora")
let pago_final = (horas * pago_hr)


document.write("su pago es de ", pago_final)

