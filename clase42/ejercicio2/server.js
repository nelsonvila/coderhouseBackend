import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const date = new Date()
        const data = { FyH: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1> 404 Not found </h1>')
    }
})

server.listen(3000, () => console.log(`El servidor esta corriendo en el puerto 3000`))