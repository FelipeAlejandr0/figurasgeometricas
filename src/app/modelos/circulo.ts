import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  override calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}