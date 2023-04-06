
const personas = []

class Persona {

    constructor() { }

    find() {
        return personas
    }

    create(persona) {
        personas.push(persona)
        return personas
    }

}

module.exports = new Persona()
