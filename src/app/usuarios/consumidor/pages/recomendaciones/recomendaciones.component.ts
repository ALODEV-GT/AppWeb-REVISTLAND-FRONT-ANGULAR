import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from '../../services/recomendaciones.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  constructor(private recomendacionesService: RecomendacionesService) {
    this.recomendacionesService.obtenerRecomendaciones('consumidor').subscribe(r => console.log(r));
   }

  ngOnInit(): void {
    
  }

}
