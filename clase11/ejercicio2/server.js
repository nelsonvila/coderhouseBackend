/*
Sobre la estructura anteriormente creada, agregar en la vista de cliente un elemento de entrada de texto donde al introducir texto, el mensaje se vea reflejado en todos los clientes conectados en un párrafo por debajo del input.
El texto debe ser enviado caracter a caracter y debe reemplazar el mensaje previo.
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
    //Escucho los mensajes enviados por el cliente
    socket.on('mensaje', data => {
        io.sockets.emit('mensaje', data)
    })
})

//Ruta para cargar nuestro archivo index.html en la raiz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const PORT = 8080

const connectServer = httpServer.listen(PORT, () => console.log(`Servidor http con WebSocket escuchando el puerto ${connectServer.address().port}`))
connectServer.on("error", error => console.log(`Error en servidor ${server}`))
