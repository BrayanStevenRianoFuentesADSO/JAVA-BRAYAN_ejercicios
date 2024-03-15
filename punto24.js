/**Escriba una expresión regular que reconozca los números en punto flotante (por
ejemplo -2.3e-1, -3e2, 23, 3.2) */

const expresion = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
const ejemplos = ["-2.3e-1", "-3e2", "23", "3.2"];

ejemplos.forEach(cadena => {
  if (expresion.test(cadena)) {
    document.write(`"${cadena}" es un número en punto flotante válido.<br>`);
  } else {
    document.write(`"${cadena}" no es un número en punto flotante válido.<br>`);
  }
});

