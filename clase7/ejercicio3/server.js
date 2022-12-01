/*
Dada la siguiente constante que almacena una frase

const frase = 'Frase inicial'

Realizar una aplicación de servidor node.js con express que incorpore las rutas get, post, put y delete necesarias para:

- Listar la frase completa: ruta get '/api/leer'
- Listar un palabra por su posición: ruta get '/api/leer/:pos' (considerar que la primera palabra tiene posición 1)

- Incorporar una palabra al final: ruta post '/api/guardar' con formato de envío: 
{palabra: (nueva palabra)}

- Actualizar una palabra por su posición: ruta put '/api/actualizar/:pos' (considerar que la primera palabra tiene posición 1) con formato de envío:
{palabra: (palabra a actualizar)}

- Borrar una palabra por su posición: ruta delete '/api/borrar/:pos' (considerar que la primera palabra tiene posición 1)

En el caso del post, put y delete, el servidor debe responder con la palabra incorporada, actualizada y eliminada respectivamente.

Utilizar Postman para probar la funcionalidad.

El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

*/

const express = require('express')
const app = express()

app.use(express.json())

let frase = 'Frase inicial'

app.get('/api/leer', (req, res) => {
    res.send(frase)
})

app.get('/api/leer/:pos', (req, res) => {
    let { pos } = req.params
    res.send(frase[pos - 1])
})

app.post('/api/guardar', (req, res) => {

    let { palabra } = req.body
    frase += ' ' + palabra
    res.send(`palabra: ${frase}`)
})

app.put('/api/actualizar/:position', (req, res) => {

    let { position } = req.params
    let { palabra } = req.body

    let palabras = frase.split(' ')
    let palabraAnterior = palabras[position - 1]
    palabras[position - 1] = palabra

    res.send(`palabra: ${palabraAnterior} fue actualizada por ${palabra}.`)
})

app.delete('/api/borrar/:position', (req, res) => {

    let { position } = req.params

    let palabras = frase.split(' ')
    let palabra = palabras.splice(position - 1, 1)
    frase = palabras.join()

    res.send(`palabra borrada: ${palabra}`)
})
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))

