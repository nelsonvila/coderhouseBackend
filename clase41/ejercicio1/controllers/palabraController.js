const Palabra = require('../models/palabra.js')

class PersonaController {

    constructor() { }

    getPalabras(req, res) {

        return res.json(Palabra.find())
    }

    agregarPalabra(req, res) {
        const { palabra } = req.body
        try {
            return res.json(Palabra.create(palabra))
        } catch (error) {
            throw error
        }
    }
}
module.exports = new PersonaController()