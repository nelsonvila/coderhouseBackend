/*
const PersonasDaoFile = require("./src/dao/PersonasDaoFile");
const PersonasDaoMem = require("./src/dao/PersonasDaoMem");

const personaDaoMem = new PersonasDaoMem()

const personaDaoFile = new PersonasDaoFile('personas.txt')

personaDaoFile.init()



const persona1 = { id: 1, nombre: 'Nelson', apellido: 'Vila' }
const persona2 = { id: 2, nombre: 'Pepe', apellido: 'Argento' }

// DAO Mem
personaDaoMem.create(persona1)
personaDaoMem.create(persona2)

// DAO File
personaDaoFile.create(persona1)
personaDaoFile.create(persona2)

//**********Memoria
console.log('Operaciones en Memoria')


console.log('getAll')
personaDaoMem.getAll().then(value => console.log(value));

console.log('getById')
console.log(personaDaoMem.getById(1))

console.log('update')
console.log(personaDaoMem.update(2, { nombre: 'Juan', apellido: 'Perez' }))

console.log('delete')
console.log(personaDaoMem.delete(2))

console.log('getAll')
console.log(personaDaoMem.getAll())
*/


//**********File
// console.log('Operaciones en Archivo')


// console.log('getAll')
// console.log(personaDaoFile.getAll())

// console.log('getById')
// console.log(personaDaoFile.getById(1))

// console.log('update')
// console.log(personaDaoFile.update(2, { nombre: 'Juan', apellido: 'Perez' }))

// console.log('delete')
// console.log(personaDaoFile.delete(2))

// console.log('getAll')
// console.log(personaDaoFile.getAll())



const PersonasDaoFile = require("./src/dao/PersonasDaoFile");
const PersonasDaoMem = require("./src/dao/PersonasDaoMem");

async function testMemoria() {
    const personasDao = new PersonasDaoMem();

    const persona1 = { id: 1, nombre: 'Juan', apellido: 'Pérez', dni: '11111111' };
    const persona2 = { id: 2, nombre: 'María', apellido: 'García', dni: '22222222' };
    await personasDao.create(persona1);
    await personasDao.create(persona2);

    console.info('** Operaciones en Memoria **')

    console.log('getAll')

    console.log(await personasDao.getAll());


    console.log('getById')
    console.log(await personasDao.getById(1));

    console.log('update')
    await personasDao.update(1, { nombre: 'Pedro', apellido: 'Alvarez' });
    console.log(await personasDao.getById(1));

    console.log('delete')
    await personasDao.delete(2);
    console.log(await personasDao.getAll());
}
async function testFile() {
    const personasDaoArchivo = new PersonasDaoFile('./personas.txt');
    personasDaoArchivo.init()

    const persona1 = { id: 1, nombre: 'Juan', apellido: 'Pérez', dni: '11111111' };
    const persona2 = { id: 2, nombre: 'María', apellido: 'García', dni: '22222222' };

    await personasDaoArchivo.create(persona1);
    await personasDaoArchivo.create(persona2);

    console.info('** Operaciones en Archivo **')

    console.log('getAll')

    console.log(await personasDaoArchivo.getAll());


    console.log('getById')
    console.log(await personasDaoArchivo.getById(1));

    console.log('update')
    await personasDaoArchivo.update(1, { nombre: 'Julian', apellido: 'Alvarez' });
    console.log(await personasDaoArchivo.getById(1));

    console.log('delete')
    await personasDaoArchivo.delete(2);
    console.log(await personasDaoArchivo.getAll());

    console.log('getAll')

    console.log(await personasDaoArchivo.getAll());

}

testMemoria();
testFile();
