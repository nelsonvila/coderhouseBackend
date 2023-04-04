const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send('Hola yarn')
})

const server = app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto ${PORT}`) })
server.on('error', error => console.log(`Error en servidor ${error}`))