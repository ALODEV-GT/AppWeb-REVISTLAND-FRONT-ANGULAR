import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RevistaCostoM } from '../../../../control/costo-por-dia/RevistaCostoM';

@Injectable({
  providedIn: 'root'
})
export class CostoDiarioService {

  baseUrl: string = "http://localhost:8080/REVISTLAND/controladorCostoDiario"

  constructor(private http: HttpClient) { }

  obtenerRevistasConCosto() {
    return this.http.get<RevistaCostoM[]>(`${this.baseUrl}?accion=obtenerRevistasConCosto`);
  }

  cambiarCostoDiario(idCostoDiario: number, nuevoCosto: number) {
    return this.http.get<void>(`${this.baseUrl}?accion=cambiarCostoDiario&nuevoCosto=${nuevoCosto}&idCostoDiario=${idCostoDiario}`);
  }
}
