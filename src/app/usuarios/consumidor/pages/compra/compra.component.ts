import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DescripcionRevistaM } from 'src/control/DescripcionRevista/DescripcionRevistaM';
import { DetalleRevistaService } from '../../services/detalle-revista.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  detalleRevista!: DescripcionRevistaM;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private detalleRevistaService: DetalleRevistaService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({revista}) => this.detalleRevistaService.obtenerDetalleRevista(revista))

    ).subscribe( (detalleRevista: DescripcionRevistaM) => this.detalleRevista = detalleRevista);
  }

  miFormulario: FormGroup = this.fb.group({
    tipoPago: ["1",Validators.required],
    fechaCompra: [`${this.fechaActual()}`,Validators.required]
  })

  realizarCompra(){
    console.log("Se realizo el pago");
    
  }

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }
}
