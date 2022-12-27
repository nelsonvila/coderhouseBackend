/*
Realizar un proyecto TypeScript node.js que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola.
La funcionalidad debe estar implementada dentro de una clase en un archivo color.ts y deberá utilizar sintaxis Typescript tipada.
El proyecto deberá convertir este código TS a JS5 en forma automática con TSC CLI

-------------
Inicializar el proyecto
npm init

Instalar tsc
npm i typescript

Ejecutar el comando
node_modules/.bin/tsc ./index.ts -w
*/
class Color {
  private colorRGB: string = "";

  constructor() {
    this.colorRGB = `${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()}`;
  }

  randomColor = (): number => Math.floor(Math.random() * 255);
  getColor = (): string => this.colorRGB;
}

const coulor = new Color();

console.log(coulor.getColor);
