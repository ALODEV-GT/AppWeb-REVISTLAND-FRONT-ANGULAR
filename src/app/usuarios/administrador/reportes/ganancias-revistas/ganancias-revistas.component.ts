import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteGananciaRevistaBean } from 'src/control/datos-reportes-admin/ReporteGananciaRevistaBean';
import { ReportesAdministradorService } from '../../services/reportes-administrador.service';

@Component({
  selector: 'app-ganancias-revistas',
  templateUrl: './ganancias-revistas.component.html',
  styleUrls: ['../../../editor/reportes/estilos-reportes.css']
})
export class GananciasRevistasComponent implements OnInit {

  reportes!: ReporteGananciaRevistaBean[];

  constructor(
    private fb: FormBuilder,
    private fechaService: FechaService,
    private reportesAdministradorService: ReportesAdministradorService
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
    this.reportesAdministradorService.obtenerReporteGananciasPorRevista(fechaInicial, fechaFinal)
      .subscribe((res: ReporteGananciaRevistaBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte(){
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesAdministrador?reporte=reporteGananciasPorRevista&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
