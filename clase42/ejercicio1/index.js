const http = require('http')
const https = require('https')
const fs = require('fs')
const { error } = require('console')

//Opciones para la solicitud http
const httpOptions = {
    host: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

//Opciones para la solicitud https
const httpsOptions = {
    host: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
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
        // Escribir la respuesta en el archivo postHttp.json
        fs.writeFile('postHttp.json', responseData, (error) => {
            if (error) throw error
            console.log('El archivo postHttp.json fue creado con exito!')
        })
    })
})

httpRequest.on('error', (e) => {
    console.error(`Error en la solicitud ${error}`)
})

httpRequest.end()

//Realizar solicitud https
const httpsRequest = https.request(httpsOptions, (res) => {
    let responseData = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        responseData += chunk
    })
    res.on('end', () => {
        // Escribir la respuesta en el archivo postHttps.json
        fs.writeFile('postHttps.json', responseData, (error) => {
            if (error) throw error
            console.log('El archivo postHttps.json fue creado con exito!')
        })
    })
})

httpsRequest.on('error', (e) => {
    console.error(`Error en la solicitud ${error}`)
})

httpsRequest.end()