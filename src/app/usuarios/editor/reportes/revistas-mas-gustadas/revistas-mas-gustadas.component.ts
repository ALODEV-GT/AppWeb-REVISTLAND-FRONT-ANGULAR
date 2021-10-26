import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteRevistaMasGustadaBean } from 'src/control/datos-reportes-editor/ReporteRevistaMasGustadaBean';
import { ReportesEditorService } from '../../services/reportes-editor.service';

@Component({
  selector: 'app-revistas-mas-gustadas',
  templateUrl: './revistas-mas-gustadas.component.html',
  styleUrls: ['../estilos-reportes.css']
})
export class RevistasMasGustadasComponent implements OnInit {

  reportes!: ReporteRevistaMasGustadaBean[];

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
    this.reportesEditorService.obtenerReporteRevistasMasGustadas(fechaInicial, fechaFinal)
      .subscribe((res: ReporteRevistaMasGustadaBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte() {
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesEditor?reporte=reporteRevistasMasGustadas&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
