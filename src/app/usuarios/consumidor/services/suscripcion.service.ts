import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuscripcionM } from '../../../../control/suscripcion/SuscripcionM';
import { MiRevistaConsumidorM } from '../../../../control/revista-cosumidor/MiRevistaConsumidorM';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/suscripcionControlador";

  constructor(private http: HttpClient) { }

  registrarSuscripcion(suscripcion: SuscripcionM) {
    return this.http.post<void>(`${this.baseUrl}?accion=registrarSuscripcion`, suscripcion);
  }

  obtenerRevistasSuscritas(nombreUsuario: string | undefined) {
    return this.http.get<MiRevistaConsumidorM[]>(`${this.baseUrl}?accion=obtenerSuscripcionesUsuario&nombre=${nombreUsuario}`);
  }
}
