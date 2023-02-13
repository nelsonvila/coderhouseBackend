const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const PORT = 8080
const app = express()
//Arrays
const usuarios = []

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

//Passport
app.use(passport.initialize())
app.use(passport.session())

//passport route
//register
passport.use('register', new LocalStrategy({
    passReqToCallback: true
}, (req, username, password, done) => {
    const { direccion } = req.body
    const usuario = usuarios.find(usuario => usuario.username == username)
    if (usuario) {
        return done('already registered')
    }
    const user = {
        username,
        password,
        direccion
    }
    usuarios.push(user)
    return done(null, user)
}))

//login
passport.use('login', new LocalStrategy((username, password, done) => {

    const user = usuarios.find(usuario => usuario.username == username)

    if (!user) {
        return done(null, false)
    }

    if (user.password != password) {
        return done(null, false)
    }

    user.contador = 0

    return done(null, user);
}));

passport.serializeUser(function (user, done) {
    done(null, user.username)
})
passport.deserializeUser(function (username, done) {
    const usuario = usuarios.find(usuario => usuario.username == username)
    done(null, usuario)
})
//AUTH
function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }

}
//Routes
//register
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', passport.authenticate('register', { failureRedirect: '/failregister', successRedirect: '/' }))

app.get('/failregister', (req, res) => {
    res.render('register-error')
})
//login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin', successRedirect: '/datos' }))

app.get('/faillogin', (req, res) => {
    res.render('login-error');
})

//datos
app.get('/datos', isAuth, (req, res) => {
    if (!req.user.contador) {
        req.user.contador = 0
    }
    req.user.contador++
    res.render('datos', {
        datos: usuarios.find(usuario => usuario.username == req.user.username),
        contador: req.user.contador
    });
})

//logout
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/')
    });
})
//inicio
app.get('/', isAuth, (req, res) => {
    res.redirect('/datos')
})



const server = app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

/*
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { engine } = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', engine());
app.set('view engine', '.hbs');

const PORT = 8080;

const usuarios = [];

passport.use(new LocalStrategy(
    (nombre, password, done) => {
        const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password);
        if (!usuario) {
            return done(null, false);
        }
        return done(null, usuario);
    }
));

passport.serializeUser((usuario, done) => {
    done(null, usuario.nombre);
});

passport.deserializeUser((nombre, done) => {
    const usuario = usuarios.find(usuario => usuario.nombre == nombre);
    done(null, usuario);
});

//Routes
//register
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
    const { nombre, password, direccion } = req.body;
    const usuario = usuarios.find(usuario => usuario.nombre == nombre);

    if (usuario) {
        return res.render('regsiter-error');
    }
    usuarios.push({ nombre, password, direccion });
    res.redirect('/login');
});

//login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/datos',
    failureRedirect: '/login'
}));

//datos
app.get('/datos', (req, res) => {
    if (req.user) {
        res.json({
            datos: usuarios.find(usuario => usuario.nombre == req.user.nombre)
        });
    } else {
        res.redirect('login');
    }
});
*/