/**
 Crea un archivo JS que contenga las siguientes líneas

     -
     Una cadena de texto con tu Nombre

     -
     Otra cadena de texto con tu Apellido

     -
     Una cadena de texto que se llame "estudiante"
 concatenando tu Nombre y tu Apellido con un espacio entre medias

     -
     Una cadena de texto que se llame "estudianteMayus"
 que contenga la cadena estudiante pero todo en mayúsculas

     -
     Una cadena de texto que se llame "estudianteMinus"
 que contenga la cadena estudiante pero todo en minúsculas

     -
     Una variable que contenga el número de letras de la cadena "estudiante"
 contando los espacios

     -
     Una variable que contenga la primera letra del Nombre

     -
     Otra variable que contenga la última letra del Apellido

     -
     Una cadena de texto que elimine los espacios de la variable "estudiante"

     -
     Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
 */
let nombre = ["Jose Manuel"]

let apellido = ["Cavallini Malaver"]

//concatenando string
//let estudiante = ["estudiante" + " " + nom + " " + apellido]


const estudiante = nombre.concat(" ").concat(apellido)
console.log(estudiante)
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length

// Todas válidas
// const inicialNombre = nombre[0]
// const inicialNombre = nombre.at(0)
const inicialNombre = nombre.substring(0, 1)
// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante.replace(/ /g, "")

const nombreEnEstudiante = estudiante.includes(nombre)