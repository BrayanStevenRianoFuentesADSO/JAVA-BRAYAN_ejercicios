/**Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es
menor a $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a
$100.000 se paga un interés anual de 4%. Al final mostrar el saldo final y el interés
pagado. */

let saldo = parseFloat(prompt("Ingrese el saldo de su depósito:"));

let interesMenor100k = 0.03; // 3%
let interesMayor100k = 0.04; // 4%

let interes = 0;

if (saldo < 100000) {
  interes = saldo * interesMenor100k;
} else {
  interes = saldo * interesMayor100k;
}

let saldoFinal = saldo + interes;

document.write("Saldo inicial: $" + saldo.toFixed(2) + "<br>");
document.write("Interés pagado: $" + interes.toFixed(2) + "<br>");
document.write("Saldo final: $" + saldoFinal.toFixed(2) + "<br>");
