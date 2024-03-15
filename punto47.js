/*Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de
ellos, el menor o si son iguales.*/

let array_nums = []

for (i =0; i<=2;i++)
{

    let num=parseInt(prompt("ingrese un numero"))
    array_nums.push(num) 
}



if (array_nums[0]>array_nums[1] && array_nums[0]>array_nums[2])
{
    document.write("el primer numero es el mayor <br>")
} 

else if (array_nums[1]>array_nums[0] && array_nums[1]>array_nums[2])
{
    document.write("el segundo numero es el mayor <br>")
} 

else if (array_nums[2]>array_nums[0] && array_nums[2]>array_nums[1])
{
    document.write("el tercer numero es el mayor <br>")
}



if (array_nums[0]<array_nums[1] && array_nums[0]<array_nums[2])
{
    document.write("el primer numero es el menor <br>")
} 

else if (array_nums[1]<array_nums[0] && array_nums[1]<array_nums[2])
{
    document.write("el segundo numero es el menor <br>")
} 

else if (array_nums[2]<array_nums[0] && array_nums[2]<array_nums[1])
{
    document.write("el tercer numero es el menor <br>")
}


if (array_nums[0]==array_nums[1] && array_nums[1]==array_nums[2])
{
    document.write("los tres numeros son iguales <br>")
} 

else if (array_nums[1]==array_nums[0])
{
    document.write("el segundo numero es igual a el primero <br>")
} 

else if (array_nums[2]==array_nums[0])
{
    document.write("el tercer numero es igual a el primero <br>")
}

else if (array_nums[1]==array_nums[2])
{
    document.write("el segundo numero es igual a el tercer <br>")
}