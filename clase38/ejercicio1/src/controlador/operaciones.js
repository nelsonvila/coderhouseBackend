import { sumar, restar, dividir, multiplicar, listar as listarNeg } from "../negocio/operaciones.js";

const suma = async (req, res) => {
    let { a, b } = req.query

    res.send(`La suma de ${a} + ${b} es igual a ${await sumar(Number(a), Number(b))}`)
}

const resta = async (req, res) => {
    let { a, b } = req.query

    res.send(`La resta de ${a} - ${b} es igual a ${await restar(Number(a), Number(b))}`)
}

const mult = async (req, res) => {
    let { a, b } = req.query

    res.send(`La multiplicacion de ${a} * ${b} es igual a ${await multiplicar(Number(a), Number(b))}`)
}

const div = async (req, res) => {
    let { a, b } = req.query

    res.send(`La division de ${a} / ${b} es igual a ${await dividir(Number(a), Number(b))}`)
}

const listar = async (req, res) => { res.json(await listarNeg()) }

export default {
    suma,
    resta,
    div,
    mult,
    listar
}