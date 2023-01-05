export default class Perimetro {
  perimetroCuadrado(side: number): number {
    return side * 4;
  }

  perimetroRectangulo(length: number, width: number): number {
    return length * width * 2;
  }

  perimetroCirculo(diameter: number): number {
    return Math.PI * diameter;
  }
}
