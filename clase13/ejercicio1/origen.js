/*
Realizar un programa que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola. Este estará implementado en un archivo llamado color.js
La funcionalidad debe estar implementada dentro de una clase y deberá utilizar sintaxis ES6 (const, let, arrow function y template string).
Convertir este código ES6 a JS5 con Babel online. Realizar esta conversión en forma automática dentro de un proyecto node.js que utilice Ba bel CLI

---------
Inicializar el proyecto
npm init

Instalamos la librería Babel, el cliente, y el plugin
npm install @babel/core @babel/cli @babel/preset-env

Crear el fichero de configuración de Babel .babelrc

{
   "presets": ["@babel/preset-env"]
}
Definimos un script en el package.json
"build": "babel ./origen.js -o ./destino.js -w"
origen.js es el archivo que se va a transpilar y el archivo destino.js es el arhivo transpilado

Ejecutamos el script: npm run build
*/

class Calor {
    constructor() {
        this.colorRGB = `${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()}`
    }

    randomColor = () => Math.floor(Math.random * 255);
}

const color = new Calor();

console.log(color.colorRGB);