/**
Crea un archivo llamado fechas.js que contenga las siguientes líneas

    -
    La fecha de hoy

    -
    La fecha de tu nacimiento

    -
    Un variable que indique si hoy es más tarde( > ) que la fecha de tu nacimiento

    -
    Una variable que contenga el día de tu nacimiento

    -
    Una variable que contenga el mes de tu nacimiento(recuerda que Enero es mes 0)

    -
    Una variable que contenga el año de tu nacimiento(con 4 dígitos)

*/

const fechadehoy = new Date(2023, 01, 06)
console.log(fechadehoy)

const fecha_nacimiento = new Date(1999, 0, 23)
console.log(fecha_nacimiento)

let var_nacimiento = fechadehoy > fecha_nacimiento
console.log(var_nacimiento)

let dia_nacimiento = fecha_nacimiento.getDate()
console.log(dia_nacimiento)

let mes_nacimiento = fecha_nacimiento.getMonth() + 1
console.log(mes_nacimiento)

let anio_nacimiento = fecha_nacimiento.getFullYear()
console.log(anio_nacimiento)