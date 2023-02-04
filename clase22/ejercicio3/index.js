const fs = require('fs')
const { normalize, schema, denormalize } = require('normalizr')
const util = require('util')

const holding = JSON.parse(fs.readFileSync('./holding.json'))

//Definir esquema empleado
const empleado = new schema.Entity('empleado')

//Definir esquema organigrama
const organigrama = new schema.Entity('organigrama', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})

//Definir el grupo de empresa
const grupo = new schema.Entity('grupo', {
    empresas: [organigrama]
})

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true))
}

console.log("--Objecto normalizado--")
const normalizeHolding = normalize(holding, grupo)
print(normalizeHolding)

console.log("--Objecto Desnormalizado--")
const denormalizeHolding = denormalize(normalizeHolding.result, grupo, normalizeHolding.entities)

//longitudes de obectos
const longOrig = JSON.stringify(holding).length
const longNorm = JSON.stringify(normalizeHolding).length
const longDenorm = JSON.stringify(denormalizeHolding).length


console.log('Longitud objecto original', longOrig)
console.log('Longitud objecto Normalizado', longNorm)
console.log('Longitud objecto Desnormalizado', longDenorm)

//Calcular porcentaje de compresion del proceso de normalizacion
const porcentajeC = (longNorm * 100) / longOrig

console.log('Porcentaje de compresion:', porcentajeC.toFixed(2) + '%')
