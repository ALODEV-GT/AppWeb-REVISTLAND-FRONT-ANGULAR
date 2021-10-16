import { Component, Input } from '@angular/core';
import { MiRevistaConsumidorM } from '../../../../../control/revista-cosumidor/MiRevistaConsumidorM';

@Component({
  selector: 'app-tarjeta-mi-revista',
  templateUrl: './tarjeta-mi-revista.component.html',
  styleUrls: ['./tarjeta-mi-revista.component.css']
})
export class TarjetaMiRevistaComponent {

  @Input() miRevista! : MiRevistaConsumidorM;

  

}
