import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../../services/generales.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pagina-generales',
  templateUrl: './pagina-generales.component.html',
  styleUrls: ['./pagina-generales.component.css']
})
export class PaginaGeneralesComponent implements OnInit {

  porcentajeGanancia!: number;

  constructor(
    private generalesService: GeneralesService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.generalesService.obtenerPorcentajeGanancia().subscribe(r => {
      if(r){
        this.miFormulario.controls["porcentaje"].setValue(Number(r.porcentaje).toFixed(2)); 
      }
    });
  }

  miFormulario: FormGroup = this.fb.group({
    porcentaje: ["", Validators.required]
  });

  cambiarPorcentaje(){
    this.generalesService.cambiarPorcentajeGanancia(this.miFormulario.get('porcentaje')?.value)
    .subscribe(r => {this.mostrarSnakBar('Se ha actualizado el Porcentaje por suscripcion')});
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }
}
