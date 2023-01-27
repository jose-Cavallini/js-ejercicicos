//Este archivo debe calcular el factorial de 10 utilizando un bucle 
//while, una bifurcación if y una sentencia break

var fact = 1;
const nrofact = 11;
let i = 1;
while (i <= nrofact) {
    if (i != nrofact) {
        fact = fact * i;
        i++;
    } else {
        break
    }
}
console.log(fact);