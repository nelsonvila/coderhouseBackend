const express = require('express')
const logger = require('./logger.js')

const app = express()

const PORT = 8080

app.get('/sumar', (req, res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)

    if (!isNaN(n1) && !isNaN(n2)) {
        logger.info(`Parametro ${n1} y ${n2} correctos para la suma`)
        const resultado = n1 + n2
        res.send(`La suma de ${n1} mas ${n2} es ${resultado}`)
    } else {
        logger.error(`Parametros incorrectos para la suma`)
        res.send('Parametros de entrada no validos')
    }
})

app.get('*', (req, res) => {
    const { url, method } = req
    logger.warn(`Ruta ${method} ${url} no implementada`);
    res.send(`Ruta ${method} ${url} no implementada`)
})


const server = app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`)
})

server.on('error', error => logger.error(`Error en servidor ${error}`))