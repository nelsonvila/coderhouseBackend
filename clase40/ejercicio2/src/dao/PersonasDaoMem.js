class PersonasDaoMem {

    constructor() {
        this.personas = []
    }

    async getAll() {
        return this.personas
    }

    async getById(id) {
        return this.personas.find((p) => p.id === id)
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
        return this.personas[personaIndex]
    }

    async delete(id) {
        const personaIndex = this.personas.findIndex((p) => p.id === id)

        if (personaIndex === -1) {
            throw new Error('La persona no exite')
        }
        const deletePersona = this.personas[personaIndex]
        this.personas.splice(personaIndex, 1)

        return deletePersona
    }
}

module.exports = PersonasDaoMem
