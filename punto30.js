/**Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener
entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.
*/

let contras = (prompt("digite una contraseña"))

if (contras.length < 8) {
  document.write("su contraseña es demasiado corta <br>")
}

else {
  document.write("su contraseña tiene una medida adecuada <br>")

  if (/[A-Z]/.test(contras)) {
    document.write("su contraseña contiene mayusculas <br>")
  }

  else {
    document.write("su contraseña deberia contener mayusculas <br>")

    if (/[a-z]/.test(contras)) {
      document.write("su contraseña contiene minusculas <br>")
    }

    else {
      document.write("su contraseña deberia contener una letra minuscula <br>")

      if (/[0-9]/.test(contras)) {
        document.write("su contraseña contiene numeros")
      }

      else {
        document.write("su contraseña deberia contener numeros")
      }
    }
  }
}








// function TieneMayusc(texto) {
//   let patron = /^[A-Z]/

//   return patron.test(texto)
// }

// document.write(TieneMayusc(`Javascript`))

