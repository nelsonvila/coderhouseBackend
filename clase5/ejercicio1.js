/*
NÚMEROS ALEATORIOS
A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.
*/
const obtenerNumAleatorios = () => parseInt(Math.random() * 20) + 1
let numeros = {}

for (let i = 0; i < 10000; i++) {
    let numero = obtenerNumAleatorios()
    if (!numeros[numero]) numeros[numero] = 0
    numeros[numero]++
}

console.log(numeros)