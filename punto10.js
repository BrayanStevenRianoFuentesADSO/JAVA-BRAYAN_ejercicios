/** La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
Los ingredientes para cada tipo de pizza aparecen a continuación.
a. Ingredientes vegetarianos: Pimiento y tofu.
b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
y en función de su respuesta le muestre un menú con los ingredientes disponibles
para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
pizza elegida es vegetariana o no y todos los ingredientes que lleva. */

let pizza = prompt("que tipo de pizza desea (vegetariana-no vegetariana)")

if (pizza == "vegetariana") {

  let ingrediente = prompt("que ingrediente le gustaria en su pizza (pimiento-tofu)")

  if (ingrediente == "tofu") {
    document.write("acaba de ordenar una pizza vegetariana con los siguientes ingredientes: tofu, mozarella y tomate")
  }
  else {
    document.write("acaba de ordenar una pizza vegetariana con los siguientes ingredientes: pimiento, mozarella y tomate")
  }
}

if (pizza == "no vegetariana") {
  let ingrediente = prompt("que ingrediente le gustaria en su pizza (pepperoni-jamon-salmon)")

  if (ingrediente == "pepperoni") {
    document.write("acaba de ordenar una pizza no vegetariana con los siguientes ingredientes: pepperoni, mozarella y tomate")
  }
  else if (ingrediente == "jamon") {
    document.write("acaba de ordenar una pizza vegetariana con los siguientes ingredientes: jamon, mozarella y tomate")
  }
  else {
    document.write("acaba de ordenar una pizza vegetariana con los siguientes ingredientes: salmon, mozarella y tomate")
  }
}