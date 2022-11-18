/*
Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.

*/

const fin = () => console.log("termine")

const mostrarLetra = (palabra, calback) => {
    let i = 0
    const interval = setInterval(() => {
        const letra = palabra[i];
        i++;
        if (letra) {
            console.log(letra)
        } else {
            clearInterval(interval);
            calback();
        }
    }, 1000)
}

setTimeout(
    () => {
        mostrarLetra("Hola", fin)
    }, 0
)

setTimeout(
    () => {
        mostrarLetra("Hola", fin)
    }, 250
)

setTimeout(
    () => {
        mostrarLetra("Hola", fin)
    }, 500
)