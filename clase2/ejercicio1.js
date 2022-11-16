/*
- Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
- Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
- Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

*/

// Ejercicio 1
const list = [20, 30, 40, 50, 60];
const emptyList = [];

function mostrarLista(list) {
    if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
            console.log(`elemento [${i}] : ${list[i]}`)
        }
    } else {
        console.log("Lista vacía")
    }
}
// Imprime lista con elementos
mostrarLista(list);
// Imprime lista vacia
mostrarLista(emptyList);




// Ejercicio 2
(function () {
    mostrarLista(["uno", "dos", "tres"]);
})();



// Ejercico 3
function crearMultiplicador(numberOne) {
    return function (numberTwo) {
        return numberOne * numberTwo;
    }
}

const multiplier = crearMultiplicador(5);
const anonymMultiplier = multiplier(2);
console.log("Resultado crearMultiplicardor y funcion anónima : " + anonymMultiplier);

function duplicar() {
    let result = anonymMultiplier * 2;
    console.log("Resultado duplicar : " + result);
}

function triplicar() {
    let result = anonymMultiplier * 3;
    console.log("Resultado triplicar : " + result);
}

duplicar();
triplicar();