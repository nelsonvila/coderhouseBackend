/*
Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
    Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:

const info = {
    contenidoStr: (contenido del archivo leído en formato string),
    contenidoObj: (contenido del archivo leído en formato objeto),
    size: (tamaño en bytes del archivo)
}

C) Muestre por consola el objeto info luego de leer el archivo
D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
E) Incluir el manejo de errores (con throw new Error)

*/
const fs = require('fs')

fs.readFile('package.json', 'utf-8', (error, contenido) => {
    if (error) {
        console.log(error)
    } else {
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: contenido.length
        }

        fs.writeFile('info.txt', JSON.stringify(info, null, 2), error => {
            if (error) {
                console.log(error)
            } else {
                console.log('escritura exitosa!')
            }
        })

    }
})

//Nota: ejecutar el ejercicio con el comando: node ejercicio4.js