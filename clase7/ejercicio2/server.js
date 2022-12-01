/*
Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
a) Ruta get '/api/sumar/5/6
b) Ruta get '/api/sumar?num1=5&num2=62) 
c) Ruta get '/api/operacion/5+6
No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.
*/

const express = require('express')
const app = express()

app.get('/api/sumar/:num1/:num2', (req, res) => {
    let { num1, num2 } = req.params

    res.send({ suma: Number(num1) + Number(num2) })
})

app.get('/api/sumar', (req, res) => {
    let { num1, num2 } = req.query
    res.send({ suma: Number(num1) + Number(num2) })
})

app.get('/api/sumar/:operacion', (req, res) => {
    let { operacion } = req.params
    res.send({ operacion: eval(operacion) })
})

app.post('/api', (req, res) => {
    res.send('OK post')
})

app.put('/api', (req, res) => {
    res.send('OK put')
})

app.delete('/api', (req, res) => {
    res.send('OK delete')
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))