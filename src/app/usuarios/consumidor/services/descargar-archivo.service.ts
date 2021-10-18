import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescargarArchivoService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorDescargarArchivo";
  private urlArchivo: string = "http://localhost:8080/REVISTLAND/controladorDescargarArchivo?accion=descargarArchivo&idArchivo=";

  constructor(private http: HttpClient) { }

  getBaseUrlArchivos(): string{
    return this.urlArchivo;
  }

  obtenerDetalleRevista(idArchivo: number) {
    return this.http.get<void>(`${this.baseUrl}?accion=descargarArchivo&idArchivo=${idArchivo}`);
  }
}
