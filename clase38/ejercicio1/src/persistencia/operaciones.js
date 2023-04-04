import ContenedorArchivo from "./contenedores/contenedorArchivo.js";
import ContenedorDB from "./contenedores/contenedorDB.js";

const mode = 'db'
let contenedor

switch (mode) {
    case 'fs':
        contenedor = new ContenedorArchivo('./db.json')
        break;
    case 'db':
        contenedor = new ContenedorDB()
    default:
        break;
}

async function guardar(obj) {
    return await contenedor.guardar(obj)
}

async function listarPersistencia() {
    return await contenedor.listarAll()
}

export {
    guardar,
    listarPersistencia
}