/*
Desarrollar un servidor basado en express que tenga integrado Websocket.
Con cada conexión de cliente, el servidor debe emitir por consola en mensaje: '¡Nuevo cliente conectado!'
*/
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

//"connection" se ejecuta la primera vez que se abre una nueva conexion
io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
})

//Ruta para cargar nuestro archivo index.html en la raiz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const PORT = 8080

const connectServer = httpServer.listen(PORT, () => console.log(`Servidor http con WebSocket escuchando el puerto ${connectServer.address().port}`))
connectServer.on("error", error => console.log(`Error en servidor ${server}`))
