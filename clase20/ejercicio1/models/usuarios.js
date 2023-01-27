import mongoose from "mongoose";

const usuariosCollections = 'usuarios'

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, require: true, max: 50 },
    apellido: { type: String, require: true, max: 30 },
    dni: { type: String, require: true, max: 8, dropDups: true },
})

export const usuarios = mongoose.model(usuariosCollections, UsuarioSchema)