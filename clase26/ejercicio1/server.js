const express = require('express')
const { engine } = require('express-handlebars')
const jwt = require('./jwt')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './views');

const PORT = 8080
//Arrays
const usuarios = []

//Routes
//register
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req, res) => {
    const { nombre } = req.body
    const usuario = usuarios.find(usuario => usuario.nombre === nombre)

    if (usuario) {
        return res.statusCode(400).json({
            error: 'el nombre del usuario ya existe'
        })
    }

    const user = req.body

    if (!user.contador) {
        user.contador = 0
    }

    usuarios.push(user)
    const access_token = jwt.generateAuthToken(nombre)
    res.json({ access_token })
})

app.get('/register-error', (req, res) => {
    res.render('register-error')
})

//login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req, res) => {
    const { nombre, password } = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre)

    if (!usuario) {
        return res.json({ error: 'usuario no registrado' })
    }

    const credencialesOk = usuario.nombre == nombre && usuario.password == password

    if (!credencialesOk) {
        return res.json({ error: 'credenciales invalidas' })
    }

    usuario.contador = 0
    const access_token = jwt.generateAuthToken(nombre)

    res.json({ nombre, access_token })

})

//datos
app.get('/api/datos', jwt.auth, (req, res) => {
    const usuario = usuarios.find(usuario => usuario.nombre == req.user.nombre)
    if (!usuario) {
        return res.status(404).json({ error: 'usuario no encontrado' })
    }

    usuario.contador++
    res.json({
        datos: usuario,
        contador: usuario.contador
    })
})

app.get('/login-error', (req, res) => {
    res.render('login-error')
})

const server = app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))