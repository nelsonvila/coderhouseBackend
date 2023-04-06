const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config();

const PersonaController = require('./controller/personas.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//establecemos la configuración de handlebars
app.engine('hbs', engine({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/html-onwire', async (req, res) => {
    let personas = await PersonaController.findAll();
    res.render('plantilla-html-onwire', { personas: personas });
});

app.post('/html-onwire', async (req, res) => {
    await PersonaController.create(req.body);
    res.redirect('/html-onwire');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))