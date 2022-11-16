/*
- Definir variables variables que almacenen los siguiente datos:
* Un nombre: “pepe”
* Una edad: 25
* Un precio: $99.90
* Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
* Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
- Mostrar todos esos valores por consola
- Incrementar la edad en 1 y volver a mostrarla
- Agregar una serie a la lista y volver a mostrarla

*/
const nombre = "pepe"
let edad = 25
const precio = "$9.99"
let series = ["Dark", "Mr Robot", "Castlevania"]
const pelicula = { "nombre": "Matrix", "año": 2008, "actor": "Keane Reeves" }

console.log("Nombre:", nombre)
console.log("Edad:", edad)
edad += 1
console.log("Edad New:", edad)
console.log("Precio:", precio)
console.log("Series:", series)
series.push("Suit")
console.log("Series New:", series)
console.log("Pelicula:", pelicula)
