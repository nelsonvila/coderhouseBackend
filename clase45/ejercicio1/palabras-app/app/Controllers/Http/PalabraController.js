'use strict'

class PalabraController {
    index({ request, response, view }) {
        const { palabras } = request.get()
        let arrayPalabras = palabras.split(' ')
        let arrayPalabrasInvertidas = [...arrayPalabras].reverse()

        return view.render('palabras', { titulo: 'Con controlador', arrayPalabras, arrayPalabrasInvertidas })
    }
}

module.exports = PalabraController
