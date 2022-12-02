/*
- Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
GET: devolverá la lista requerida en formato objeto.
POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
Persona -> { "nombre": ..., "apellido": ..., "edad":... }
Mascota -> { "nombre":..., "raza":..., "edad":... }
*/
const express = require('express')
const app = express()

app.use(express.static('public'))

const routePersona = express.Router()
const routeMascota = express.Router()

routeMascota.use(express.json())
routePersona.use(express.json())
routeMascota.use(express.urlencoded({ extended: true }))
routePersona.use(express.urlencoded({ extended: true }))

app.use('/mascota', routeMascota)
app.use('/persona', routePersona)

/// Mascotas
let mascotas = []
routeMascota.get('/listar', (req, res) => {
    res.json(mascotas)
})

routeMascota.post('/guardar', (req, res) => {
    console.log(req)
    mascotas.push(req.body)
    res.json(mascotas)
})

// Personsas
let personas = []
routePersona.get('/listar', (req, res) => {
    res.json(personas)
})

routePersona.post('/guardar', (req, res) => {
    console.log(res.body)
    personas.push(req.body)
    res.json(personas)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
