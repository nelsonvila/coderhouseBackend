import { guardar, listarPersistencia } from "../persistencia/operaciones.js"

async function sumar(a, b) {
    let resultado = a + b
    await guardar({
        tipo: 'suma',
        params: [a, b],
        resultado,
        timestamp: Date.now()
    })

    return resultado
}

async function restar(a, b) {
    let resultado = a - b
    await guardar({
        tipo: 'resta',
        params: [a, b],
        resultado,
        timestamp: Date.now()
    })

    return resultado
}

async function multiplicar(a, b) {
    let resultado = a * b
    await guardar({
        tipo: 'multiplicacion',
        params: [a, b],
        resultado,
        timestamp: Date.now()
    })

    return resultado
}

async function dividir(a, b) {
    let resultado = a / b
    await guardar({
        tipo: 'division',
        params: [a, b],
        resultado,
        timestamp: Date.now()
    })

    return resultado
}

async function listar() {
    return await listarPersistencia()
}

export {
    sumar,
    restar,
    multiplicar,
    dividir,
    listar
}