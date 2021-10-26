import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporteGananciaAnuncioBean } from 'src/control/datos-reportes-admin/ReporteGananciaAnuncioBean';
import { ReporteGananciaRevistaBean } from 'src/control/datos-reportes-admin/ReporteGananciaRevistaBean';
import { ReporteGananciaTotalBean } from 'src/control/datos-reportes-admin/ReporteGananciaTotalBean';
import { ReporteMasComentadaBean } from 'src/control/datos-reportes-admin/ReporteMasComentadaBean';
import { ReportePopularesBean } from 'src/control/datos-reportes-admin/ReportePopularesBean';

@Injectable({
  providedIn: 'root'
})
export class ReportesAdministradorService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorReportesAdministrador";

  constructor(private http: HttpClient) { }

  public obtenerReporteGananciasPorRevista(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteGananciaRevistaBean[]>(`${this.baseUrl}?reporte=reporteGananciasPorRevistaNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteGananciasPorAnuncio(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteGananciaAnuncioBean[]>(`${this.baseUrl}?reporte=reporteGananciasPorAnuncioNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteGananciasTotales(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteGananciaTotalBean[]>(`${this.baseUrl}?reporte=reporteGananciasTotalesNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteRevistasPopulares(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReportePopularesBean[]>(`${this.baseUrl}?reporte=reporteRevistasPopularesNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }

  public obtenerReporteRevistasMasComentadas(fechaInicial: string, fechaFinal: string) {
    return this.http.get<ReporteMasComentadaBean[]>(`${this.baseUrl}?reporte=reporteRevistasMasComentadasNG&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`);
  }
}
