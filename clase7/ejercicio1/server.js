/*
Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
*/
const express = require('express')
const frase = 'Hola mundo cómo están'
const app = express()

app.get('/api/frase', (req, res) => {
    res.send(frase)
})

app.get('/api/letras/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if (!isNaN(num)) {
        if (num >= 1 && num <= frase.length) {
            res.send(frase[num - 1])
        } else {
            res.send({ error: `El parametro ${num} esta fuera del rango de la frase` })
        }
    } else {
        res.send({ error: 'El parametro ingresado no es numerico' })
    }
})

app.get('/api/palabras/:num', (req, res) => {
    let num = parseInt(req.params.num)

    if (!isNaN(num)) {
        let palabras = frase.split(' ')
        if (num >= 1 && num <= palabras.length) {
            res.send(palabras[num - 1])
        } else {
            res.send({ error: `El parametro ${num} esta fuera del rango de la frase` })
        }
    } else {
        res.send({ error: 'El parametro ingresado no es numerico' })
    }
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))