import got from 'got'

setInterval(() => {
    got('http://localhost:3000/egreso', { responseType: 'json' })
        .then(response => console.log(response.body.numeros))
        .catch(error => console.log(error))
}, 1000);