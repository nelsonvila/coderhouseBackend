/*
- Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
GET: devolverá la lista requerida en formato objeto.
POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
Persona -> { "nombre": ..., "apellido": ..., "edad":... }
Mascota -> { "nombre":..., "raza":..., "edad":... }
*/
const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.static('public'))

//Multer config
const storageMascota = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/mascota")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const storagePersona = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images/persona")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadMascota = multer({ storage: storageMascota })
const uploadPersona = multer({ storage: storagePersona })

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

routeMascota.post('/guardar', uploadMascota.array('fileMascota', 12
), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Error al subir imagen')
        error.httpstatusCode = 400
        return next(error)
    }
    mascotas.push(req.body)
    res.json(mascotas)
})

// Personsas
let personas = []
routePersona.get('/listar', (req, res) => {
    res.json(personas)
})

routePersona.post('/guardar', uploadPersona.single('filePersona'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Error al subir imagen')
        error.httpstatusCode = 400
        return next(error)
    }
    personas.push(req.body)
    res.json(personas)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
