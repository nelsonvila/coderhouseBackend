const express = require('express')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const app = express()
const PORT = process.argv[2] || 8080

//MASTER
if (cluster.isMaster) {
    console.log(numCPUs)
    console.log(`PID Master ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log(`Worker: ${worker.process.pid} 'died' - ${new Date().toLocaleString()} `)
        cluster.fork()
    })

}
//WORKERS
else {
    app.get('/', (req, res) => {
        res.send(`Servidor express corriendo en el puerto ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
    })
    app.listen(PORT, err => {
        if (!err) console.log(`Servidor corriendoen en el puerto ${PORT} - PID ${process.pid}`)
    })
}
