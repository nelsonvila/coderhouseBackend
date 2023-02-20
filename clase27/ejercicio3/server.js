
const { MODO = "prod", PUERTO = 0, DEBUG = false } = process.env

const objeto =
{
    modo: MODO,
    puerto: PUERTO,
    debug: DEBUG
}

console.log(objeto)