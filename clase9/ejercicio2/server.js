/*
Realizar una página web que permita mostrar datos personales de la siguiente forma:

<h1>Datos Personales</h1>
<ul>
    <li>(nombre)</li>
    <li>(apellido)</li>
    <li>(edad)</li>
    <li>(email)</li>
    <li>(teléfono)</li>
</ul>

Dicho datos provendrán de un objeto:
{
    nombre: '...',
    apellido: '...',
    edad: ...,
    email: '...',
    telefono: '...'
}

Importar Handlebars vía CDN en el frontend para crear dicha vista en forma dinámica.

Esta página será servida desde el espacio público de un servidor basado en node.js y express.
*/
const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 8080

app.engine('cte', (filePath, options, callback) => {
    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.log("error")
            return callback(error)
        }
        const rendered = content
            .toString()
            .replace('^^titulo$$', options.titulo)
            .replace('^^mensaje$$', options.mensaje)
            .replace('^^autor$$', options.autor)
            .replace('^^version$$', options.version)
            .replace('^^nombre$$', options.nombre)
            .replace('^^apellido$$', options.apellido)
            .replace('^^fecha$$', options.fecha);

        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'cte')

app.get('/cte1', (req, res) => {
    const datos = {
        titulo: "Soy Un titulo",
        mensaje: "Mensaje de la plantilla",
        autor: "Autor de la plantilla",
        version: 123456789
    };

    res.render('plantilla1', datos)
})

app.get('/cte2', (req, res) => {
    const datosPersona = {
        nombre: "Nelson",
        apellido: "Vila",
        fecha: new Date()
    };

    res.render('plantilla2', datosPersona)
})

const server = app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor: ${error}`))