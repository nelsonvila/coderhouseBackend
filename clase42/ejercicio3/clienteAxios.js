import axios from 'axios'

function generarNumAleatorios() {
    return Math.floor(Math.random() * 100) + 1
}

setInterval(() => {
    const numero = generarNumAleatorios()
    axios.post('http://localhost:3000/ingreso', { numero })
        .then(response => console.log(response.data.message))
        .catch(error => console.error(error))
}, 2000)