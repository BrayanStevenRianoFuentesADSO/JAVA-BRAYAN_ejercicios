/**Considere dos variables llamadas temperatura y presión. Escriba una sentencia if else que muestre en pantalla
la palabra Alarma si la variable presión es mayor a
200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar
en pantalla la palabra Normal. */

let temp= parseFloat(prompt("temperatura"))
let pres= parseFloat(prompt("presion"))

if (pres>200 || temp>100)
{
    document.write("ALARMA")
}
else{
    document.write("normal")
}