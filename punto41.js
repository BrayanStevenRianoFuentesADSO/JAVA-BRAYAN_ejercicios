/**Ingrese una frase que lo identifique como programador de Software y luego
mostrar esta frase invertida */

let frase = prompt("ingrese una frase")
let fraseReversa = "";

for (let i = frase.length-1; i>=0;i--){
    fraseReversa+=frase[i]
}

document.write(fraseReversa);