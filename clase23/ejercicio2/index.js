const express = require('express')
const session = require('express-session')

const app = express()
const getNombreSession = req => req.session.nombre ?? ''

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`${getNombreSession(req)} visitaste la pagina ${req.session.contador} veces`)
    } else {
        req.session.nombre = req.query.nombre
        req.session.contador = 1
        res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
    }
})

app.get('/olvidar', (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.json({ error: 'olvidar', body: err })
        } else {
            res.send(`Hasta luego`)
        }
    })
})

const PORT = 8080
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))