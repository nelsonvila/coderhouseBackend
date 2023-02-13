const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './views');

const PORT = 8080
//Arrays
const usuarios = []

//Routes
//register
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', (req, res) => {
    const { nombre, password, direccion } = req.body
    const usuario = usuarios.find(usuario => usuario.nombre == nombre)

    if (usuario) {
        return res.render('regsiter-error')
    }
    usuarios.push({ nombre, password, direccion })
    res.redirect('/login')
})
//login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.post('/login', (req, res) => {
    const { nombre, password } = req.body
    const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)

    if (!usuario) {
        return res.render('login-error')
    }
    req.session.nombre = nombre
    req.session.contador = 0

    res.redirect('/datos')
})
//datos
app.get('/datos', (req, res) => {
    if (req.session.nombre) {
        req.session.contador++
        res.render('datos', {
            datos: usuarios.find(usuario => usuario.nombre == req.session.nombre),
            contador: req.session.contador
        })
    } else {
        res.redirect('login')
    }
})
//logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('login')
    })
})
//inicio
app.get('/', (req, res) => {
    if (req.session.nombre) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})


const server = app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))