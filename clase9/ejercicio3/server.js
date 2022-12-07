/*
Transformar el ejercicio1, pero esta vez la página dinámica la creará el servidor desde handlebars instalado y configurado para trabajar con express.

Utilizar la misma estructura de plantilla HTML dentro de una pagina web con encabezado y el mismo objeto de datos.

EL servidor escuchará en el puerto 8080 y el resultado lo ofrecerá en su ruta root (/).
*/
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = 8080

app.engine('handlebars', engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const datosPersona = {
        nombre: "Pedro",
        apellido: "Ruiz",
        edad: 22,
        email: "nelson@gmail.com",
        telefono: "34587585"
    };

    res.render('datos', datosPersona)
})

const server = app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`)
});


server.on("error", error => console.log(`Error en el servidor: ${error}`))