import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecomendacionM } from '../../../../control/recomendacion/RecomendacionM';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorRecomendaciones";

  constructor(private http: HttpClient) { }

  obtenerRecomendaciones(nombreUsuario: string | undefined){
    return this.http.get<RecomendacionM[]>(`${this.baseUrl}?accion=obtenerRecomendaciones&nombre=${nombreUsuario}`);
  }
}
