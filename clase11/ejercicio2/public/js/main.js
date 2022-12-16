const socket = io.connect()

const input = document.getElementById('inputSocket')
const parrafo = document.getElementById('parrafo')


console.log(input)
input.addEventListener('input', () => {
    socket.emit('mensaje', input.value)
})

// Escucho los mensajes enviados por el servidor
socket.on('mensaje', messages => {
    console.log(messages)
    parrafo.innerHTML = messages
})