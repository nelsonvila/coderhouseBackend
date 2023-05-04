const Koa = require('koa')
const { koaBody } = require('koa-body')

const app = new Koa()

app.use(koaBody())

const alumnos = require('./alumnos.js')

app.use(alumnos.routes())

const PORT = 8080

const server = app.listen(PORT, () => console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))