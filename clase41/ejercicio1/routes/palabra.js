const express = require('express')
const router = express.Router()
const palabaraController = require('../controllers/palabraController.js')

router.get('/', palabaraController.getPalabras)

router.post('/', palabaraController.agregarPalabra)

module.exports = router
