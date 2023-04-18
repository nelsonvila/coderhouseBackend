const PersonasDaoMem = require("./src/dao/PersonasDaoMem");

const personaDao = new PersonasDaoMem()

const persona1 = { id: 1, nombre: 'Nelson', apellido: 'Vila' }
const persona2 = { id: 2, nombre: 'Pepe', apellido: 'Argento' }


personaDao.create(persona1)
personaDao.create(persona2)

console.log('getAll')
console.log(personaDao.getAll())

console.log('getById')
console.log(personaDao.getById(1))

console.log('update')
console.log(personaDao.update(2, { nombre: 'Juan', apellido: 'Perez' }))

console.log('delete')
console.log(personaDao.delete(2))

console.log('getAll')
console.log(personaDao.getAll())