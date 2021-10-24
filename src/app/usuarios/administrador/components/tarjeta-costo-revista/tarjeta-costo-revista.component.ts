import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RevistaCostoM } from '../../../../../control/costo-por-dia/RevistaCostoM';
import { CostoDiarioService } from '../../services/costo-diario.service';

@Component({
  selector: 'app-tarjeta-costo-revista',
  templateUrl: './tarjeta-costo-revista.component.html',
  styleUrls: ['./tarjeta-costo-revista.component.css']
})
export class TarjetaCostoRevistaComponent implements OnInit {

  @Input() revistaCosto!: RevistaCostoM;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private costoDiarioService: CostoDiarioService
  ) { }

  ngOnInit(): void {
    this.miFormulario.controls["costoDia"].setValue(Number(this.revistaCosto.costo).toFixed(2));
  }

  miFormulario: FormGroup = this.fb.group({
    costoDia: ["", Validators.required]
  });

  cambiarCostoDia() {
    const nuevoCosto = this.miFormulario.get("costoDia")?.value;
    this.costoDiarioService.cambiarCostoDiario(this.revistaCosto.idCostoPorDia, nuevoCosto).subscribe((res) => {
      this.mostrarSnakBar("Se cambio el costo diario a: " + this.revistaCosto.nombreRevista);
    });
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }
}
