const express = require('express')
const { fork } = require('child_process')
const path = require('path')

const app = express()

const PORT = 8080
let visitas = 0
//Rutas
app.get('/', (req, res) => {
    res.json({ visitas: ++visitas })
})

app.get('/calculo-bloq', (req, res) => {
    const resultado = calculoLento()
    res.json({ resultado })
})

app.get('/calculo-nobloq', (req, res) => {
    const computo = fork(path.resolve(__dirname, 'computo.js'))
    computo.send('start')
    computo.on('message', resultado => {
        res.json({ resultado })
    })
})


const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))

function calculoLento() {
    let sum = 0
    for (let i = 0; i < 5e9; i++) {
        sum += i
    }
    return sum
}