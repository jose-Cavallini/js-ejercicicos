/**
Crea un archivo llamado objetos.js que contenga las siguientes líneas

    -
    Un objeto con tus datos personales(nombre, apellido, edad, altura, eresDesarrollador)

    -
    Una variable que obtenga tu edad a partir del objeto anterior

    -
    Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

    -
    Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor * /

*/

const datos_personales = {
    nombre: "jose",
    apellido: "Cavallini",
    edad: "24",
    altura: "163cm",
    eresDesarrollador: true
}
console.log(datos_personales)
let Edad = datos_personales.edad
console.log(Edad)

const datos_personales1 = {
    nombre: "kevin",
    apellido: "salazar",
    edad: "23",
    altura: "164cm",
    eresDesarrollador: false
}
const datos_personales2 = {
    nombre: "Fufito",
    apellido: "Del Valle",
    edad: "25",
    altura: "170cm",
    eresDesarrollador: false
}
let dt_personales_list = [{
        ...datos_personales
    },
    {
        ...datos_personales1
    },
    {
        ...datos_personales2
    }
]
console.log(dt_personales_list)


let orden_edad_list = dt_personales_list.sort((a, b) => a.edad - b.edad)

console.log(orden_edad_list)