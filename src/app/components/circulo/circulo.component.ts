import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonImg, IonItem, IonInput, IonButton 
} from '@ionic/angular';
import { Circulo } from '../../modelos/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonImg, IonItem, IonInput, IonButton
  ]
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcular() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}