/*
Basado en el ejercicio que venimos realizando, ahora los mensajes enviados por los clientes deberán ser almacenados en el servidor y reflejados por debajo del elemento de entrada de texto cada vez que el usuario haga un envío. La estructura de almacenamiento será un array de objetos, donde cada objeto tendrá la siguiente estructura:
{ socketid: (el socket.id del que envió el mensaje), mensaje: (texto enviado)}

- Cada cliente que se conecte recibirá la lista de mensajes completa.
- Modificar el elemento de entrada en el cliente para que disponga de un botón de envío de mensaje.
- Cada mensaje de cliente se representará en un renglón aparte, anteponiendo el socket id.
*/
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

const mensajes = []

//"connection" se ejecuta la primera vez que se abre una nueva conexion
io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    //Envio de los mensajes al cliente que se conecto
    socket.emit('mensajes', mensajes)
    //Escucho los mensajes enviados por el cliente
    socket.on('mensaje', data => {
        mensajes.push({ socketId: socket.id, mensaje: data })
        io.sockets.emit('mensaje', mensajes)
    })
})

//Ruta para cargar nuestro archivo index.html en la raiz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const PORT = 8080

const connectServer = httpServer.listen(PORT, () => console.log(`Servidor http con WebSocket escuchando el puerto ${connectServer.address().port}`))
connectServer.on("error", error => console.log(`Error en servidor ${server}`))
