/*
Determinaremos en los siguientes fragmentos de código el orden de salida de los mensajes a la consola y explicaremos el por que en cada caso
*/

//Comportamiento Bloqueante
const delay = ret => { for (let i = 0; i < ret * 3e6; i++); }

function hacerTarea(num) {
    console.log('haciendo tarea ' + num)
    delay(100)
}

console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')

function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num)
    setTimeout(cb, 100)
}

//Comportamiento No-Bloqueante
console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')

