/**
    Crea un archivo JS que contenga las siguientes líneas

    -
    Una función sin parámetros que devuelva siempre "true"

    -
    Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa"
    5 segundos después de haberse ejecutado

    -
    Una función generadora de índices pares automáticos
    
*/
function devolverTrue() {
    return true
}
console.log(devolverTrue())

const funcion_asincrona = new Promise((resolve, reject) => {

    resolve(setTimeout(() => console.log("Hola soy una promesa"), 5000))
})



function* idsPares() {
    let id = 0
    while (true) {
        yield id += 2
    }
}
const gen = idsPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

/** 
 function devuelveTrue() {
     return true
 }

 async function damePromesa() {
     return setTimeout(() => console.log("Hola soy una promesa"), 5000)
 }

 function* idsPares() {
     let id = 0
     while (true) {
         yield id += 2
     }
 }
*/