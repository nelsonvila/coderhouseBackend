const socket = io.connect()

const input = document.getElementById('inputSocket')
const main = document.getElementById('parrafo')
const boton = document.getElementById('boton')

//Envio de los mensajes al servidor
boton.addEventListener('click', () => {
    socket.emit('mensaje', input.value)
})

// Escucho los mensajes enviados por el servidor
socket.on('mensaje', messages => {
    const mensajesHTML = messages
        .map(msj => `Socketid ${msj.socketId} - Mensaje: ${msj.mensaje}`)
        .join('<br>')

    main.innerHTML = mensajesHTML
})