import { Component, Input } from '@angular/core';
import { RecomendacionM } from '../../../../../control/recomendacion/RecomendacionM';

@Component({
  selector: 'app-tarjeta-revista',
  templateUrl: './tarjeta-revista.component.html',
  styleUrls: ['./tarjeta-revista.component.css']
})
export class TarjetaRevistaComponent {

  @Input() recomendacion! : RecomendacionM;

}
