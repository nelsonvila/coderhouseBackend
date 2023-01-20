import mongoose from "mongoose";
import * as model from "./models/estudiante.js"

const URL = 'mongodb://localhost:27017/colegio'

mongoose.connect(URL, {})
    .then(() => {
        console.log('Base de datos conectada')
    })
    .then(() => {
        console.log('1 - Estudiantes ordenados alfabeticamente segun su nombre')
        model.estudiantes.find({}).sort({ nombre: 1 })
            .then(estudiantes => {
                estudiantes.forEach(estudiante => {
                    console.log(JSON.stringify(estudiante))
                })
            })

        return model.estudiantes.find({}).sort({ edad: 1 }).limit(1)
    })
    .then((estudiantes) => {
        console.log('2 - El estudiante mas joven')
        console.log(JSON.stringify(estudiantes))
        console.log('3 - Los estudiantes que pertenecen al 2A')
        return model.estudiantes.find({ curso: "2A" })
    })
    .then((estudiantes) => {
        estudiantes.forEach(estudiante => {
            console.log(JSON.stringify(estudiante))
        })

        console.log('4 - El segundo estudiante mas joven')

        return model.estudiantes.find({}).sort({ edad: 1 }).skip(1).limit(1)
    })
    .then((estudiantes) => {
        estudiantes.forEach(estudiante => {
            console.log(JSON.stringify(estudiante))
        });
        console.log('5- Solo los nombres y apellidos de los estudiantes con su curso correspondiente ordenados por apellidos descendente (Z a A)')
        return model.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ apellido: -1 })
    })
    .then((estudiantes) => {
        estudiantes.forEach(estudiante => {
            console.log(JSON.stringify(estudiante))
        })
        console.log('6 - Estudiantes que sacaron un 10')
        return model.estudiantes.find({ nota: 10 })
    })
    .then((estudiantes) => {
        estudiantes.forEach(estudiante => {
            console.log(JSON.stringify(estudiante))
        });

        console.log('7 - El promedio de las notas de los alumnos')

        return model.estudiantes.find({})
    })
    .then((estudiantes) => {
        let sumNotas = 0
        estudiantes.forEach(estudiante => {
            sumNotas += estudiante.nota
        })

        console.log(`El promedio es de todos es: ${(sumNotas / estudiantes.length).toFixed(2)}`)

        console.log('8 - El promedio de notas del curso 1A')

        return model.estudiantes.find({ curso: "1A" })

    })
    .then((estudiantes) => {
        let sumNotas = 0
        estudiantes.forEach(estudiante => {
            sumNotas += estudiante.nota
        })

        console.log(`El promedio es de todos es: ${(sumNotas / estudiantes.length).toFixed(2)}`)
    })
    .catch((err) => console.error(err))
    .finally(() => {
        mongoose.disconnect()
    })