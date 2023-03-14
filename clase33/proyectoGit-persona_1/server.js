const express = require('express')

const app = express()

app.use('/saludo', (req, res)=>{
    res.send('Hola a todos!')
})

const PORT = 8080

const server = app.listen(PORT, ()=>{console.log(`Servidor corriendo en puerto ${PORT}`)})
server.on('error', error => console.log(`Error en servidor ${error}`))