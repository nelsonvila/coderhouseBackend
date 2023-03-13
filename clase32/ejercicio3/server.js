//0x server.js FORK

/* -------------------------- DEBUG ---------------------------- */
//autocannon -d 20 -c 500 "http://localhost:8080/ramdom-debug"
/* ----------------------------------------------------------- */

/* -------------------------- NO DEBUG ---------------------------- */
//autocannon -d 20 -c 500 "http://localhost:8080/ramdom-nodebug"
/* ----------------------------------------------------------- */
const express = require('express')
const app = express()
const cluster = require('cluster')
const os = require('os')

const MODO = process.argv[2] || 'CLUSTER'

const PORT = 8080

if (MODO === "CLUSTER" && cluster.isMaster) {
    const numCPUs = os.cpus().length
    console.log(`Numero de procesadores: ${numCPUs}`)
    console.log(`PID master: ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

} else {

    function calcularRandoms(min, max, cantidad) {
        let randoms = []

        for (let i = 0; i < cantidad; i++) {
            let random = parseInt(Math.random() * (max - min + 1)) + min
            randoms.push(random)
        }

        return randoms
    }

    app.get('/randoms-nodebug', (req, res) => {
        let randoms = calcularRandoms(0, 9, 10000)
        res.json({ randoms })
    })

    app.get('/randoms-debug', (req, res) => {
        let randoms = calcularRandoms(0, 9, 10000)
        console.log(randoms)
        res.json({ randoms })
    })

    const server = app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`)

    })

    server.on('error', error => console.log(`Error en el servidor ${error}`))

}

