/**
Crea un archivo JS que contenga las siguientes líneas

    -
    Una variable que contenga tu altura en centímetros(entero)

    -
    Una variable que contenga tu altura en metros(número de coma flotante)

    -
    Una variable que contenga tu peso en kilogramos(número de coma flotante)

    -
    Una variable que contenga tu altura en metros redondeada hacia arriba

    -
    Una variable que contenga tu peso en kilogramos redondeado hacia abajo

    -
    Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1"
es igual al máximo valor que se puede obtener en Javascript
*/

let altcm = 168
let altmetros = 1.68
let pesokg = 64.7
let altura_red = Math.ceil(altmetros)
let peso_red = Math.floor(pesokg)

let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(altcm, altmetros, pesokg, altura_red, peso_red, sonIguales)