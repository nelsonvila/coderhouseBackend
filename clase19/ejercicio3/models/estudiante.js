import mongoose from "mongoose";

const estudiantesCollections = 'estudiantes'

const EstudianteSchema = new mongoose.Schema({
    nombre: { type: String, require: true, max: 50 },
    apellido: { type: String, require: true, max: 30 },
    edad: { type: Number, require: true },
    dni: { type: String, require: true, max: 8, dropDups: true },
    curso: { type: String, require: true, max: 10 },
    nota: { type: Number, require: true },
    ingreso: { type: Boolean, default: false } // agregado al Schema
})

export const estudiantes = mongoose.model(estudiantesCollections, EstudianteSchema)