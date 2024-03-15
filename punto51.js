/**Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado
excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento. */

let pago=parseFloat(prompt("cual fue el valor de pago"))
let descuento=pago*0.15
let pago_final = pago-descuento

if (pago>130000){
    document.write("ud obtuvo un descuento de $",descuento)
}

else{
    document.write("ud no obtuvo descuento")
}