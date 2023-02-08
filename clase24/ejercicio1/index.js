const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()

app.use(cookieParser())

app.use(session({
    store: new FileStore({ path: './sessiones', ttl: 60 }),
    secret: 'shhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

const getNombreSession = req => req.session.nombre ?? ''

app.get('/', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`${getNombreSession(req)} visitaste la pagina ${req.session.contador} veces`)
    } else {
        let { nombre } = req.query
        req.session.nombre = nombre
        req.session.contador = 1
        res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
    }
})

app.get('/olvidar', (req, res) => {
    let nombre = getNombreSession(req)
    req.session.destroy(err => {
        if (!err) res.send(`Hasta luego ${nombre}`)
        else res.send({ error: 'olvidar', body: err })
    })
})
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))