/**Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados. */

let nombreMes = prompt("Ingrese el nombre del mes:").toLowerCase(); // Convertir a minúsculas para facilitar la comparación

let signoZodiacal;

if (nombreMes === "enero") {
  signoZodiacal = "Capricornio";
} else if (nombreMes === "febrero") {
  signoZodiacal = "Acuario";
} else if (nombreMes === "marzo") {
  signoZodiacal = "Piscis";
} else if (nombreMes === "abril") {
  signoZodiacal = "Aries";
} else if (nombreMes === "mayo") {
  signoZodiacal = "Tauro";
} else if (nombreMes === "junio") {
  signoZodiacal = "Géminis";
} else if (nombreMes === "julio") {
  signoZodiacal = "Cáncer";
} else if (nombreMes === "agosto") {
  signoZodiacal = "Leo";
} else if (nombreMes === "septiembre") {
  signoZodiacal = "Virgo";
} else if (nombreMes === "octubre") {
  signoZodiacal = "Libra";
} else if (nombreMes === "noviembre") {
  signoZodiacal = "Escorpio";
} else if (nombreMes === "diciembre") {
  signoZodiacal = "Sagitario";
} else {
  signoZodiacal = "Mes no válido";
}

document.write("Mes: " + nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1) + "<br>");
document.write("Signo zodiacal: " + signoZodiacal + "<br>");
