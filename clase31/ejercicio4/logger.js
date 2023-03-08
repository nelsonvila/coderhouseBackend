const pino = require('pino')

function buildProd() {
    const prodLogger = pino('debug.log')
    prodLogger.level = 'debug'
    return prodLogger
}

function buildDev() {
    const devLogger = pino()
    devLogger.level = 'info'
    return devLogger
}

let logger = null

if (process.env.NODE_ENV === 'PROD') {
    logger = buildProd()
} else {
    logger = buildDev()
}

module.exports = logger