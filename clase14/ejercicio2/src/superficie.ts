export default class Superficie {
  superficieCuadrado(side: number): number {
    return side * side;
  }

  superficieRectangulo(length: number, width: number): number {
    return length * width;
  }

  superficieCirculo(radius: number): number {
    return Math.PI * radius ** 2;
  }
}
