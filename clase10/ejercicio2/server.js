/*
Realizar el mismo ejercicio que el desafío anterior utilizando ejs.
*/
const express = require('express')
const app = express()

//Configuracion EJS

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/datos', (req, res) => {
    const queryParams = req.query
    res.render('nivel', queryParams)
})

const PORT = 8080
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))