/*
Realizar un servidor que reciba por query params (mediante la ruta get '/datos') el valor que debe representar una barra de medición (usando el tag de html meter). 
Asimismo recibirá además los valores mínimos y máximos permitidos y el título que se pondrá por arriba de la barra, en un elemento h1 en color azul (debe permitir formato HTML).

Ejemplo de petición:
http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>

Como respuesta a este request, el servidor devolverá al frontend una plantilla armada con los datos recibidos.
Utilizar pug integrado a express, manejando una plantilla común y una particular con la representación requerida.
*/
const express = require('express')
const app = express()

//Configuracion PUG

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    const queryParams = req.query
    res.render('nivel', queryParams)
})

const PORT = 8080
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))