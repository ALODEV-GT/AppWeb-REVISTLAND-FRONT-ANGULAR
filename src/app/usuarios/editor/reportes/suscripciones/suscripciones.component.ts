import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteSuscripcionesBean } from 'src/control/datos-reportes-editor/ReporteSuscripcionesBean';
import { ReportesEditorService } from '../../services/reportes-editor.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['../estilos-reportes.css']
})
export class SuscripcionesComponent implements OnInit {

  reportes!: ReporteSuscripcionesBean[];

  constructor(
    private fb: FormBuilder,
    private fechaService: FechaService,
    private reportesEditorService: ReportesEditorService
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
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    this.reportesEditorService.obtenerReporteSuscripciones(fechaInicial, fechaFinal)
      .subscribe((res: ReporteSuscripcionesBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte() {
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesEditor?reporte=reporteSuscripciones&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
