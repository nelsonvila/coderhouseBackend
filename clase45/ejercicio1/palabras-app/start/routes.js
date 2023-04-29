'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')
const PalabraController = require('../app/Controllers/Http/PalabraController')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//http://127.0.0.1:3333/sin-controller?palabras=hola mundo como están todos ustedes!

//Ruta sin controlador
Route.get('/sin-controller', async ({ request, view }) => {

    console.log(request.get())
    const { palabras } = request.get()
    let arrayPalabras = palabras.split(' ')
    let arrayPalabrasInvertidas = [...arrayPalabras].reverse()

    return view.render('palabras', { titulo: 'Sin controlador', arrayPalabras, arrayPalabrasInvertidas })
})

//Ruta con controlador
Route.get('/con-controller', 'PalabraController.index')