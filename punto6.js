/*los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
grupo al que corresponde.*/

let genero = prompt("ingrese su genero (masculino-femenino)")

let nombre = prompt("ingrese su nombre")

if (genero == "femenino" && nombre.charAt(0) > "a" && nombre.charAt(0) <= "m" || genero == "masculino" && nombre.charAt(0) > "n") {
  document.write("pertenece al grupo a")
}

else {
  document.write("pertenece al grupo b")
}

