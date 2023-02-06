/**
 * Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

     -
     Un nuevo Set con los nombres de tu familia

     -
     Modifica el Set original añadiendo tu nombre(duplicado)(debería darte lo mismo)

     -
     Modifica el Set original añadiendo el nombre "Javascript"(ya que empieza a formar parte de tu vida;)
*/

const miSet = new Set(["jose", "manolo", "adela", "valentina", "margarita", "yoel"])

console.log(miSet)

miSet.add("jose")
console.log(miSet)
miSet.add("JavaScript")
console.log(miSet)