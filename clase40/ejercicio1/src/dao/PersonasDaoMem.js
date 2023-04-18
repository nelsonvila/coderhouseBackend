const PersonaDto = require("../dto/PersonaDto")

class PersonasDaoMem {

    constructor() {
        this.personas = []
    }

    async getAll() {
        return this.personas.map((persona) => new PersonaDto(persona.nombre, persona.apellido))
    }

    async getById(id) {
        const persona = this.personas.find((p) => p.id === id)
        return new PersonaDto(persona.nombre, persona.apellido)
    }

    async create(persona) {
        this.personas.push(persona)
    }

    async update(id, newData) {
        const personaIndex = this.personas.findIndex((p) => p.id === id)

        if (personaIndex === -1) {
            throw new Error('La persona no exite')
        }

        this.personas[personaIndex] = { ...this.personas[personaIndex], ...newData }
        const persona = this.personas[personaIndex]
        return new PersonaDto(persona.nombre, persona.apellido)
    }

    async delete(id) {
        const personaIndex = this.personas.findIndex((p) => p.id === id)

        if (personaIndex === -1) {
            throw new Error('La persona no exite')
        }
        const deletePersona = this.personas[personaIndex]
        this.personas.splice(personaIndex, 1)

        return new PersonaDto(deletePersona.nombre, deletePersona.apellido)
    }
}

module.exports = PersonasDaoMem
