/*
Realizar un programa que ejecute las siguientes tareas:
A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
B) Mostrar este objeto info en la consola.
C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
D) Mostrar los errores por consola.

*/
const fs = require('fs')

fs.promises.readFile('info.txt', 'utf-8')
    .then(contenido => {
        console.log('lectura exitosa de info.txt')
        const info = JSON.parse(contenido)
        console.log(info)

        const packObj = info.contenidoObj
        packObj.author = "CoderHouse"

        fs.promises.writeFile('package.json.coder', JSON.stringify(packObj, null, 2))
            .then(() => console.log('escritura exitosa de package.json.coder'))
            .catch(error => console.log(error))
    }).catch(error => console.log(error))


//Nota: ejecutar el ejercicio con el comando: node ejercicio5.js