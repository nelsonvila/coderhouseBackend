const express = require('express')
const app = express()
const PORT = process.argv[2] || 8080

app.get('/', (req, res) => {
    res.send(`Servidor express corriendo en el puerto ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})
app.listen(PORT, err => {
    if (!err) console.log(`Servidor corriendoen en el puerto ${PORT} - PID ${process.pid}`)
})