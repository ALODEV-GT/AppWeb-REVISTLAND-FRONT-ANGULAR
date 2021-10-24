import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Fecha {
  fecha: string
}

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  baseUrl: string = "http://localhost:8080/REVISTLAND/controladorFechaGlobal";

  constructor(private http: HttpClient) { }

  obtenerFecha() {
    return this.http.get<Fecha>(`${this.baseUrl}?accion=obtenerFecha`);
  }

  cambiarFecha(fecha: Fecha) {
    return this.http.post<void>(`${this.baseUrl}?accion=cambiarFecha`, fecha);
  }

}
