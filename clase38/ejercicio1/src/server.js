import express from "express";
import routerOperaciones from './rutas/operaciones.js'
import routerAuth from './rutas/auth.js'


const app = express()

app.get('/', (req, res) => {
    res.send('Hola yarn')
})

app.use('/operaciones', routerOperaciones)
app.use('/', routerAuth)

const PORT = 8080

const server = app.listen(PORT, () => { `Servidor esta corriendo en el puerto ${PORT}` })

server.on('error', error => console.log(`Error en el servidor ${error}`))
