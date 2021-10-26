import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha, FechaService } from 'src/app/services/fecha.service';
import { ReporteGananciaAnuncioBean } from 'src/control/datos-reportes-admin/ReporteGananciaAnuncioBean';
import { ReportesAdministradorService } from '../../services/reportes-administrador.service';

@Component({
  selector: 'app-ganancias-anuncios',
  templateUrl: './ganancias-anuncios.component.html',
  styleUrls: ['../../../editor/reportes/estilos-reportes.css']
})
export class GananciasAnunciosComponent implements OnInit {

  reportes!: ReporteGananciaAnuncioBean[];

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
    this.reportesAdministradorService.obtenerReporteGananciasPorAnuncio(fechaInicial, fechaFinal)
      .subscribe((res: ReporteGananciaAnuncioBean[]) => {
        this.reportes = res;
      });
  }

  urlPeticionReporte(){
    let fechaInicial = this.miFormulario.get('fechaInicial')?.value;
    let fechaFinal = this.miFormulario.get('fechaFinal')?.value;
    return `http://localhost:8080/REVISTLAND/controladorReportesAdministrador?reporte=reporteGananciasPorAnuncio&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`;
  }

}
