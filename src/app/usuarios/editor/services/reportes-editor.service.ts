import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReporteComentariosBean } from 'src/control/datos-reportes-editor/ReporteComentariosBean';
import { ReporteSuscripcionesBean } from 'src/control/datos-reportes-editor/ReporteSuscripcionesBean';
import { ReporteRevistaMasGustadaBean } from 'src/control/datos-reportes-editor/ReporteRevistaMasGustadaBean';
import { ReporteGananciaTotalBean } from 'src/control/datos-reportes-editor/ReporteGananciaTotalBean';

@Injectable({
  providedIn: 'root'
})
export class ReportesEditorService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorReportesEditor";

  constructor(private http: HttpClient) { }

  public obtenerReporteComentarios(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteComentariosBean[]>(`${this.baseUrl}?reporte=reporteComentariosNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteSuscripciones(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteSuscripcionesBean[]>(`${this.baseUrl}?reporte=reporteSuscripcionesNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteRevistasMasGustadas(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteRevistaMasGustadaBean[]>(`${this.baseUrl}?reporte=reporteRevistasMasGustadasNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteGanancias(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteGananciaTotalBean[]>(`${this.baseUrl}?reporte=reporteGananciasNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }
}
