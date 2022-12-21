/*
En base a lo desarrollado en clase, realizar una aplicación basada en node.js, express y websocket que permita generar un chat colaborativo entre usuarios conectados.
- Cada usuario podrá ingresar su nombre y mensaje a través de un formulario y enviar la información utilizando el canal de websocket. 
- Los mensajes serán presentados en tiempo real en cada uno de los clientes. 
- Cuando un usuario nuevo se conecte, recibirá todos los mensajes hasta ahí ingresados. 
- Los mensajes persistirán en memoria del servidor.
*/
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

let messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
];


io.on("connection", function (socket) {
    console.log("Un cliente se ha conectado")
    socket.emit("messages", messages)

    socket.on("newMessage", function (data) {
        messages.push(data);
        io.sockets.emit("messages", messages)
    })
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const PORT = 8080

const srv = server.listen(PORT, () => console.log(`El servidor websocket esta corriendo en el pureto ${srv.address().port}`))

srv.on("error", erro => console.log(`Error en el servidor ${error}`))