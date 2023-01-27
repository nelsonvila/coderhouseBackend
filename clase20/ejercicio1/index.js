import mongoose from 'mongoose'
import * as model from './models/usuarios.js'

const URL = 'mongodb+srv://coder:coder2023@clustercoder.zcwjrpg.mongodb.net/ecommerce?retryWrites=true&w=majority'

mongoose.connect(URL, {}, erro => {
    if (erro) throw new Error(`Error en la conexion a la base de datos ${erro}`)
    console.log('Base de datos conectada!')
})

try {
    console.log('Listas de usuarios')
    const usuarios = await model.usuarios.find({})

    console.log(usuarios)

    const usuariosSaveModel = model.usuarios.create({
        nombre: 'Federico', apellido: 'Perez', dni: '320118321'
    }).then(() => console.log('El usuario fue cargado correctamente'))

} catch (error) {
    console.log(`Error en proceso de base de datos ${error}`)
}