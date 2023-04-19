import express from 'express'
const app = express()

let numeros = []

app.use(express.json())

app.post('/ingreso', (req, res) => {
    const { numero } = req.body
    console.log(numero)
    numeros.push(numero)
    res.json({ message: `Numero ${numero} ingresado correctamente` })
})

app.get('/egreso', (req, res) => {
    res.json({ numeros })
})

const PORT = 3000
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))