//Obtiene los argumentos de la linea de comando
const args = process.argv

// Funcion para calcular el promedio de los numeros ingresados como args
function calcularPromedio(numeros) {
    let total = 0
    if (numeros.length == 0) {
        throw {
            descripcion: 'entrada vacia'
        }
    }
    for (const num of numeros) {
        const val = Number(num)
        if (isNaN(val)) {
            throw {
                descripcion: 'error de tipo',
                numeros: numeros,
                tipos: numeros.map(n => isNaN(n) ? typeof n : 'number')
            }
        } else {
            total += val
        }
    }

    return total / numeros.length
}

// A partir de los argumentos se extraen los datos
const numeros = args.slice(2)
const promedio = calcularPromedio(numeros)
const max = Math.max(...numeros)
const min = Math.min(...numeros)
const ejecutable = process.execPath.split('/').pop()
const pid = process.pid

const datos = {
    numeros,
    promedio,
    max,
    min,
    ejecutable,
    pid
}

console.log(datos)

//Registra manejadores de eventos en el objecto process

// Evento exit
process.on('exit', code => {
    if (code) {
        console.log(`saliendo con codigo ${code}`)
    } else {
        console.log('saliendo sin codigo.. adios!')
    }
})

//Evento uncaughtExeception
process.on('uncaughtExecption', error => {
    console.log(error)
    switch (error.descripcion) {
        case 'entrada vacia':
            return process.exit(-4)
        case 'error de tipo':
            return process.exit(-5)
        default:
            return process.exit()
    }
})
