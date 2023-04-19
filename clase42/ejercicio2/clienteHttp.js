import http from 'http'

//Opciones para la solicitud http
const httpOptions = {
    host: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

//Realizar solicitud http
const httpRequest = http.request(httpOptions, (res) => {
    let responseData = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        responseData += chunk
    })
    res.on('end', () => {
        console.log(JSON.parse(responseData))
    })
})

httpRequest.on('error', (e) => {
    console.error(`Error en la solicitud ${error}`)
})

httpRequest.end()