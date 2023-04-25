const express = require('express')
const router = express.Router()
const debug = require('debug')

let products = []

function makeRandomId() {
    const number = []
    for (let i = 0; i < 8; i++) {
        number.push(Math.floor(10 * Math.random()))
    }

    return `${number.join('')}`
}

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    debug('Registrando en GET' + JSON.stringify(products))
    res.json(products)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id == id)
    if (!product) {
        res.sendStatus(404)
    }
    res.json(product)
    debug('Registrando en GET ID' + JSON.stringify(product))
})

router.post('/', (req, res) => {
    console.log('LLego a post')
    const { nombre, precio } = req.body

    const product = { id: makeRandomId(), nombre, precio: Number(precio) }
    products.push(product)

    debug('Registrando en POST' + JSON.stringify(products))
    res.status(201).json(product)

})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const { nombre, precio } = req.body
    const newProduct = { id: makeRandomId(), nombre, precio: Number(precio) }

    const index = products.findIndex(p => p.id == id)

    if (index == -1) {
        return res.sendStatus(404)
    }

    products.splice(index, 1, newProduct)

    res.json(newProduct)
    debug('Registrando en PUT' + JSON.stringify(newProduct))

})


router.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = products.findIndex(p => p.id == id)
    if (index == -1) {
        return res.sendStatus(404)
    }

    products.splice(index, 1)

    res.sendStatus(204)
    debug('Registrando en DELETE ID' + JSON.stringify(product))
})

module.exports = router