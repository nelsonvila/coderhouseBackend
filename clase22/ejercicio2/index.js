const fs = require('fs')
const { normalize, schema, denormalize } = require("normalizr")
const util = require('util')

const empresa = JSON.parse(fs.readFileSync("./empresa.json"))

//Definir esquema para empleado

const empleado = new schema.Entity('empleado')

//Definir esquema para organigrama

const organigrama = new schema.Entity('organigrama', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true))
}

console.log("--Objecto Normalizado--")
const normalizeEmpresa = normalize(empresa, organigrama)
print(normalizeEmpresa)

console.log('Longitud de objecto original:', JSON.stringify(empresa).length)
console.log('Longitud de objecto normalizado:', JSON.stringify(normalizeEmpresa).length)

console.log('--Objecto Desnormalizado--')
const denormalizeEmpresa = denormalize(normalizeEmpresa.result, organigrama, normalizeEmpresa.entities)
print(denormalizeEmpresa)

console.log('Longitud de objecto original:', JSON.stringify(empresa).length)
console.log('Longitud de objecto desnormalizado:', JSON.stringify(denormalizeEmpresa).length)

