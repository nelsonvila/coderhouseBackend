const express = require("express")
const app = express()

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

app.get('/test', (req, res) => {
    let objetos = []

    for (let i = 0; i < 10; i++) {
        let nombre = nombres[Math.floor(Math.random() * nombres.length)]
        let apellido = apellidos[Math.floor(Math.random() * apellidos.length)]
        let color = colores[Math.floor(Math.random() * colores.length)]

        objetos.push({ nombre, apellido, color })
    }

    res.json(objetos)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))