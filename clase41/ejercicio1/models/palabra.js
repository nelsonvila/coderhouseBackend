
let palabras = []

class Palabra {

    constructor() { }

    find() {
        return palabras
    }

    create(palabra) {
        const nuevapalabra = {
            id: palabras.length + 1,
            palabra: palabra,
            timestamp: Date.now()
        }
        palabras.push(nuevapalabra)
        return palabras
    }

}

module.exports = new Palabra()
