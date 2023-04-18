const fs = require('fs')
const path = require('path')
const PersonaDto = require('../dto/PersonaDto')

class PersonasDaoFile {

    constructor(archivo) {
        this.archivo = archivo
    }

    init() {
        if (!fs.existsSync(this.archivo)) {
            fs.writeFileSync(this.archivo, JSON.stringify([]))
        }
    }

    async getAll() {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        this.personas = JSON.parse(data)

        return this.personas.map((persona) => new PersonaDto(persona.nombre, persona.apellido))
    }

    async getById(id) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        this.personas = JSON.parse(data)
        const persona = this.personas.find((persona) => persona.id = id)

        return new PersonaDto(persona.nombre, persona.apellido)

    }

    async create(persona) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        this.personas = JSON.parse(data)

        persona.id = this.personas.length + 1
        this.personas.push(persona)

        await fs.promises.writeFile(this.archivo, JSON.stringify(this.personas), null, 2)
    }

    async update(id, persona) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        this.personas = JSON.parse(data)
        console.log(this.personas)
        const personaIndex = this.personas.findIndex((p) => p.id === id)

        if (personaIndex === -1) {
            throw new Error('La persona no exite')
        }

        persona.id = id
        this.personas[personaIndex] = persona

        await fs.promises.writeFile(this.archivo, JSON.stringify(this.personas), null, 2)

        return new PersonaDto(persona.nombre, persona.apellido)
    }

    async delete(id) {
        const data = await fs.promises.readFile(this.archivo, "utf-8")
        this.personas = JSON.parse(data)

        const personaIndex = this.personas.findIndex((p) => p.id === id)

        if (personaIndex === -1) {
            throw new Error('La persona no exite')
        }

        const deletePersona = this.personas[personaIndex]
        this.personas.splice(personaIndex, 1)


        await fs.promises.writeFile(this.archivo, JSON.stringify(this.personas), null, 2)


        return new PersonaDto(deletePersona.nombre, deletePersona.apellido)
    }


}

module.exports = PersonasDaoFile