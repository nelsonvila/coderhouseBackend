const fs = require('fs')
const { normalize, schema } = require("normalizr")
const util = require('util')

const empresa = JSON.parse(fs.readFileSync('./empresa.json'))

//Definimos un esquema de empleado

const empleado = new schema.Entity('empleado')

//Definimos un esquema de organigrama

const organigrama = new schema.Entity('organigrama', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true))
}

console.log("Objecto Normalizado")

const normalizeEmpresa = normalize(empresa, organigrama)
print(normalizeEmpresa)

console.log('Longitud de objecto original:', JSON.stringify(empresa).length)
console.log('Longitud de objecto normalizado:', JSON.stringify(normalizeEmpresa).length)


