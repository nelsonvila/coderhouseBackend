const Router = require('koa-router')

const router = new Router({
    prefix: '/alumnos'
})

const alumnos = [
    { dni: 12345, nombre: 'Juan Perez', materia: 'Matematica', nota: 6 },
    { dni: 54321, nombre: 'Silvio Ruiz', materia: 'Fisica', nota: 7 },
    { dni: 43251, nombre: 'Andres Galvez', materia: 'Matematica', nota: 10 },
    { dni: 12345, nombre: 'Diego Alvarez', materia: 'Fisica', nota: 8 }
]

//Routes
router.get('/', ctx => {
    ctx.body = { alumnos }
})

router.get('/promedio', ctx => {
    const materia = ctx.request.query.materia

    let suma = 0
    const cant = alumnos
        .filter(alumno => alumno.materia == materia)
        .map(alumno => (suma += alumno.nota)).length
    const promedio = suma / cant
    ctx.body = {
        promedio: cant
            ? promedio
            : `No hay alumnos en ${materia} para calcular el promedio`,
    }
})

router.get('/:dni', ctx => {
    const getCurrentalumno = alumnos.filter(alumno => {
        if (alumno.dni == ctx.params.dni) {
            return true
        }
    })

    if (getCurrentalumno.length) {
        ctx.body = getCurrentalumno[0]
    } else {
        ctx.response.status = 404
        ctx.body = {
            status: 'error!',
            message: 'alumno Not Found with that dni!',
        }
    }
})


router.post('/new', ctx => {
    if (!ctx.request.body.dni ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota) {
        ctx.response.status = 400,
            ctx.body = {
                status: "error",
                message: "Por favor ingrese la informacion completa"
            }
    } else {
        const newAlumno = {
            dni: ctx.request.body.dni,
            nombre: ctx.request.body.nombre,
            materia: ctx.request.body.materia,
            nota: ctx.request.body.nota
        }

        alumnos.push(newAlumno)
        ctx.response.status = 201
        ctx.body = {
            status: 'success',
            message: 'New Alumno added '
        }
    }
})

router.put('/update/:dni', ctx => {

    if (!ctx.request.dni ||
        !ctx.request.nombre ||
        !ctx.request.materia ||
        !ctx.request.nota) {
        ctx.response.status = 400,
            ctx.body = {
                status: "error",
                message: "Por favor ingrese la informacion completa"
            }
    } else {
        const dni = ctx.request.params.dni
        const index = alumnos.findIndex(alumno => alumno.dni = dni)
        alumnos.splice(index, 1, ctx.request.body)

        ctx.response.status = 202
        ctx.body = {
            status: 'success',
            message: 'Alumno updated successful'
        }
    }

})

router.del('/delete/:dni', ctx => {
    const dni = ctx.request.params.dni
    const index = alumnos.findIndex(alumno => alumno.dni = dni)
    alumnos.splice(index, 1)

    ctx.response.status = 200
    ctx.body = {
        status: 'success',
        message: 'Alumno deleted successful'
    }
})

module.exports = router