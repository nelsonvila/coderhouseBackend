/*
Calculadora de edad
Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

Un ejemplo de salida:
Hoy es 11/01/2021
Nací el 29/11/1968
Desde mi nacimiento han pasado 52 años.
Desde mi nacimiento han pasado 19036 días.

Ayuda:
Utilizar los métodos diff y format de la librería moment.
*/
const moment = require('moment')

let fechaActual = new Date();

fechaActual = moment(fechaActual)

const fechaCumple = moment('1991-10-24')

const añosResult = fechaActual.diff(fechaCumple, 'years')
const diasResult = fechaActual.diff(fechaCumple, 'days')

console.log(`Hoy es ${fechaActual}`)
console.log(`Naci el ${fechaCumple}`)
console.log(`Desde mi nacimiento han pasado ${añosResult} años`)
console.log(`Desde mi nacimiento han pasado ${diasResult} dias`)