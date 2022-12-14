/*
Desarrollar un servidor basado en node.js, express y ejs que disponga de un formulario en su ruta raíz, creado con una plantilla de ejs, para ingresar los siguientes datos de una persona: nombre, apellido y edad. 

La información serán enviada mediante el método post al endpoint '/datos'

Representar por debajo del mismo formulario los datos históricos ingresados más el actual en forma de tabla. En el caso de no encontrarse información mostrar el mensaje 'No se encontraron datos' en lugar de la tabla.

Se recomienda el uso de bootstrap en los estilos de las plantillas.
*/
const express = require('express')
const app = express()

let personas = []
//Configuracion EJS
app.use(express.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/datos', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('formulario', { personas })
})

const PORT = 8080
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))