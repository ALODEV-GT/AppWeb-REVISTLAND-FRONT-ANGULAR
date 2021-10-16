import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorGenerales";

  constructor(private htpp: HttpClient) { }

  obtenerPorcentajeGanancia() {
    return this.htpp.get<any>(`${this.baseUrl}?accion=obtenerPorcentajeGanancia`);
  }

  cambiarPorcentajeGanancia(porcentaje: number) {
    return this.htpp.get<void>(`${this.baseUrl}?accion=cambiarPorcentaje&porcentaje=${porcentaje}`);
  }
}
