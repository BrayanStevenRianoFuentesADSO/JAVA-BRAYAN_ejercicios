/*Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.*/
let array_nums = []

for (i =0; i<=2;i++)
{

    let num=parseInt(prompt("ingrese un numero"))
    array_nums.push(num) 
}

if (array_nums[0]>array_nums[1] && array_nums[0]>array_nums[2])
{
    document.write("el primer numero es el mayor")
} 

else if (array_nums[1]>array_nums[0] && array_nums[1]>array_nums[2])
{
    document.write("el segundo numero es el mayor")
} 

else if (array_nums[2]>array_nums[0] && array_nums[2]>array_nums[1])
{
    document.write("el tercer numero es el mayor")
}