/*
Desarrollar un motor de plantillas custom para un servidor basado en express que permita representar en la ruta '/cte1' el siguiente archivo de plantilla 'plantilla1.cte':

<h1>^^titulo$$</h1>
<p>^^mensaje$$</p>
<b>^^autor$$</b>
<hr>
<i><b>Versión: ^^version$$</b></i>

Con los datos que provienen desde un objeto:
{ 
    titulo: (algún título en string)),
    mensaje:(algún mensaje en string),
    autor: (algun autor en string),
    version: (numerica)
}

Este motor personalizado debe permitir parsear objetos de datos con claves dinámicas y volcar sus valores en la plantilla seleccionada.

Crear otra ruta '/cte2' que represente otro archivo de plantilla: 'plantilla2.cte' con los datos nombre, apellido y la fecha/hora provenientes de un objeto.
*/
const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('public'))

const server = app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor: ${error}`))