import { faker } from "@faker-js/faker";
import express from "express";

faker.locale = 'es'

const app = express()

app.get('/test', (req, res) => {
    let objetos = []
    let cantidad = 10
    let id = 1

    if (req.query.cantidad) {
        cantidad = req.query.cantidad
    }

    for (let i = 0; i < cantidad; i++) {
        let nombre = faker.name.firstName()
        let apellido = faker.name.lastName()
        let color = faker.color.human()

        objetos.push({ id, nombre, apellido, color })

        id++
    }

    res.json(objetos)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))