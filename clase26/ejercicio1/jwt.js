const jwt = require('jsonwebtoken')
const PRIVATE_KEY = "myprivatekey"

// Generar Token
function generateAuthToken(nombre) {
    const token = jwt.sign({ nombre: nombre }, PRIVATE_KEY, { expiresIn: '60s' })
    return token
}

//Middelware de verificacion
function auth(req, res, next) {
    const authHeader = req.headers['authorization']
    console.log(req.headers)

    if (!authHeader) {
        return res.status(401).json(
            {
                error: 'se requiere autenticacion para acceder a este recurso',
                detalle: 'no se encontro token autenticacion'
            }
        )
    }

    const token = authHeader.split(' ')[1]

    try {
        req.user = jwt.verify(token, PRIVATE_KEY)
    } catch (error) {
        return res.status(403).json({
            error: 'token invalido',
            detalle: 'nivel de acceso insuficiente para el recurso solicitado'
        })
    }

    next()
}

module.exports = { generateAuthToken, auth }