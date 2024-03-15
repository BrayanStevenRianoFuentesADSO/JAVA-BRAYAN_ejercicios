// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la
// contraseña introducida por el usuario coincide con la guardada en la variable sin
// tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
// ingresar valores alfanuméricos. 



let contraseña = prompt("cree una contraseña")

let pass = prompt("ingrese la contraseña")

const esAlfanumerico = /^[a-zA-Z0-9]+$/;

if (!esAlfanumerico.test(contraseña) || !esAlfanumerico.test(pass)) {
  document.write("Por favor, ingrese unicamente valores alfanuméricos para la contraseña");
}

if (pass === contraseña) {
  document.write("su contraseña coincide con la contraseña guardada")
}


else {
  document.write("su contraseña NO coincide con la contraseña guardada")
}