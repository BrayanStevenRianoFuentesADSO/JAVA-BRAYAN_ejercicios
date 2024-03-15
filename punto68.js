/**Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10. */

for (let i = 1; i <= 10; i++) {
    document.write("Tabla del " + i + ":<br>");
    
    for (let j = 1; j <= 10; j++) {
      document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
  
    document.write("<br>");
  }
  
  
