/*
Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

Todas las funciones tendrán que ser realizadas con sintaxis flecha.
*/

const operacion = (a, b, op) => op(a, b)

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b


console.log(operacion(4, 5, suma))
console.log(operacion(12, 5, resta))
console.log(operacion(2, 5, multiplicacion))
console.log(operacion(10, 5, division))
console.log(operacion(18, 2, modulo))