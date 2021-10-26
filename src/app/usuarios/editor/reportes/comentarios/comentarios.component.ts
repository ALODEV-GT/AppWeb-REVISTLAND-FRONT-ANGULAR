import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteComentariosBean } from 'src/control/datos-reportes-editor/ReporteComentariosBean';
import { ReportesEditorService } from '../../services/reportes-editor.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['../estilos-reportes.css']
})
export class ComentariosComponent implements OnInit {

  reportes!: ReporteComentariosBean[];

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
    this.reportesEditorService.obtenerReporteComentarios(fechaInicial, fechaFinal)
      .subscribe((res: ReporteComentariosBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte() {
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesEditor?reporte=reporteComentarios&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
