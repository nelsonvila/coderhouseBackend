const express = require('express')
const { suma, multiplicacion, resta, division } = require('suma-nelson')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send('Hola yarn')
})

app.get('/suma', (req, res) => {
    let { a, b } = req.query

    res.send(`La suma de ${a} + ${b} es igual a ${suma(Number(a), Number(b))}`)
})

app.get('/resta', (req, res) => {
    let { a, b } = req.query

    res.send(`La reata de ${a} - ${b} es igual a ${resta(Number(a), Number(b))}`)
})

app.get('/multiplicacion', (req, res) => {
    let { a, b } = req.query

    res.send(`La multiplicacion de ${a} * ${b} es igual a ${multiplicacion(Number(a), Number(b))}`)
})

app.get('/division', (req, res) => {
    let { a, b } = req.query

    res.send(`La division de ${a} / ${b} es igual a ${division(Number(a), Number(b))}`)
})

const server = app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto ${PORT}`) })
server.on('error', error => console.log(`Error en servidor ${error}`))