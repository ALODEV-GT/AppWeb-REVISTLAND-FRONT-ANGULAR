import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescargarArchivoService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorDescargarArchivo";

  constructor(private http: HttpClient) { }

  obtenerDetalleRevista(idArchivo: number) {
    return this.http.get<void>(`${this.baseUrl}?accion=descargarArchivo&idArchivo=${idArchivo}`);
  }
}
