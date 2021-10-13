import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorRecomendaciones";

  constructor(private http: HttpClient) { }

  obtenerRecomendaciones(nombreUsuario: string){
    return this.http.get<any>(`${this.baseUrl}?accion=obtenerRecomendaciones&nombre=${nombreUsuario}`);
  }
}
