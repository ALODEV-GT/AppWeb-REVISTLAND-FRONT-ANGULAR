import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DetalleRevistaService } from '../../services/detalle-revista.service';
import { DescripcionRevistaM } from '../../../../../control/DescripcionRevista/DescripcionRevistaM';

@Component({
  selector: 'app-desc-revista',
  templateUrl: './desc-revista.component.html',
  styleUrls: ['./desc-revista.component.css']
})
export class DescRevistaComponent implements OnInit {

  detalleRevista!: DescripcionRevistaM;

  constructor(private activatedRoute: ActivatedRoute, private detalleRevistaService: DetalleRevistaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({revista}) => this.detalleRevistaService.obtenerDetalleRevista(revista))

    ).subscribe( (detalleRevista: DescripcionRevistaM) => this.detalleRevista = detalleRevista);
  }

}
