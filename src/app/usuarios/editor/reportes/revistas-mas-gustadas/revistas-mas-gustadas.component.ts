import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';

@Component({
  selector: 'app-revistas-mas-gustadas',
  templateUrl: './revistas-mas-gustadas.component.html',
  styleUrls: ['../estilos-reportes.css']
})
export class RevistasMasGustadasComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private fechaService: FechaService
  ) { }

  ngOnInit(): void {
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaInicial"].setValue(resp.fecha);
      this.miFormulario.controls["fechaFinal"].setValue(resp.fecha);
    });
  }
  miFormulario: FormGroup = this.fb.group({
    fechaInicial: ['', Validators.required],
    fechaFinal: ['', Validators.required],
  });

  solicitarReporte() {
    console.log("Solicitando reporte...");
  }

  urlPeticionReporte(){
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesAdministrador?reporte=reporteRevistasMasGustadas&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
