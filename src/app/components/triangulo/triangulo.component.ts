import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonImg, IonItem, IonInput, IonButton 
} from '@ionic/angular';
import { TrianguloEscaleno } from '../../modelos/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonItem, IonInput, IonButton
]
})
export class TrianguloComponent {
  ladoA: number= 0;
  ladoB: number= 0;
  ladoC: number= 0;
  perimetro: number | null = null;

  calcular() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
  }
}