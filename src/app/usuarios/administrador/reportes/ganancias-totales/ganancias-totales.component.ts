import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteGananciaTotalBean } from 'src/control/datos-reportes-admin/ReporteGananciaTotalBean';
import { ReportesAdministradorService } from '../../services/reportes-administrador.service';

@Component({
  selector: 'app-ganancias-totales',
  templateUrl: './ganancias-totales.component.html',
  styleUrls: ['../../../editor/reportes/estilos-reportes.css']
})
export class GananciasTotalesComponent implements OnInit {

  reportes!: ReporteGananciaTotalBean[];

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
    this.reportesAdministradorService.obtenerReporteGananciasTotales(fechaInicial, fechaFinal)
      .subscribe((res: ReporteGananciaTotalBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte(){
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesAdministrador?reporte=reporteGananciasTotales&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
