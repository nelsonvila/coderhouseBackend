const Persona = require('../models/persona.js')

class PersonaController {

    constructor() { }

    async findAll() {
        try {
            return await Persona.find()
        } catch (error) {
            throw error
        }
    }

    async create(persona) {
        try {
            return await Persona.create(persona)
        } catch (error) {
            throw error
        }
    }
}
module.exports = new PersonaController()
