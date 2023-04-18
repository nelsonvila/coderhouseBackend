const express = require('express')
const bodyParser = require('body-parser')
const palabrasRouter = require('./routes/palabra.js')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: "GET"
}))

app.use(bodyParser.json())

app.use('/palabras', palabrasRouter)

const PORT = 8080

const server = app.listen(PORT, () => console.log(`El servidor esta corriendo en http://127.0.0.1:8080`))
server.on('error', error => console.error(`Error en el servidor ${error}`))