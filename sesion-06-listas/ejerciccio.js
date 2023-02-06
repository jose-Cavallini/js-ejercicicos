/**
Crea un archivo JS que contenga las siguientes líneas

    -
    Una variable que contenga la lista de la compra(mínimo 5 elementos)

    -
    Modifica la lista de la compra y añádele "Aceite de Girasol"

    -
    Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

    -
    Una lista de tus 3 películas favoritas(objetos con propiedades: titulo, director, fecha)

    -
    Una nueva lista que contenga las películas posteriores al 1 de enero de 2010(utilizando filter)

    -
    Una nueva lista que contenga los directores de la lista de películas original(utilizando map)

    -
    Una nueva lista que contenga los títulos de la lista de películas original(utilizando map)

    -
    Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando concat)

    -
    Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando el factor de propagación)
*/

let lista = ["arroz", "azucar", "mayonesa", "papel", "leche"]
console.log(lista)

lista.push("Aceite de Girasol", )
console.log(lista)
lista.pop()
console.log(lista)

let pelisfavorita = [{
        titulo: "avatar",
        director: "1 nose",
        fecha: "1 nose"
    },
    {
        titulo: "Mente indomable",
        director: "2 nose",
        fecha: "2 nose"
    },
    {
        titulo: "Gladiador",
        director: "3 nose",
        fecha: 20200102
    }
]
//filter
const peliposterior = pelisfavorita.filter(fecha => fecha.fecha > 20200101)
console.log(peliposterior)

//map
const pelidirector = pelisfavorita.map((valor, indice) => `${valor.director}`)
console.log([pelidirector])

const pelititulo = pelisfavorita.map((valor, indice) => `${valor.titulo}`)
console.log([pelititulo])

//concat
const gruplist = pelidirector.concat(pelititulo)
console.log(gruplist)
// ...  factor de propagacion
const gruplist2 = [...pelidirector, ...pelititulo]
console.log(gruplist2)

/**   resuelto
 const compra = ["Leche", "Huevos", "Mantequilla", "Miel", "Yogures"]

 compra.push("Aceite de Girasol")
 compra.pop()

 const peliculas = [{
         titulo: "El efecto mariposa",
         director: "Eric Bress",
         fecha: new Date(2004, 3, 30)
     },
     {
         titulo: "Spider-Man: No Way Home",
         director: "Jon Watts",
         fecha: new Date(2021, 11, 16)
     },
     {
         titulo: "Pulp Fiction",
         director: "Quentin Tarantino",
         fecha: new Date(1995, 0, 13)
     }
 ]

 const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

 const directores = peliculas.map(pelicula => {
     return pelicula.director
 })
 const titulos = peliculas.map(pelicula => {
     return pelicula.titulo
 })
 const directores_titulos = directores.concat(titulos)
 const directores_titulos_prop = [...directores, ...titulos]
 */