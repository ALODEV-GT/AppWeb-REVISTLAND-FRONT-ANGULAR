import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PermitirM } from 'src/control/permisos-revista/PermitirM';

@Injectable({
  providedIn: 'root'
})
export class PermisosRevistaService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorPermisosRevista";

  constructor(private http: HttpClient) { }

  permitirSuscripciones(idPublicacion: number){
    return this.http.get<PermitirM>(`${this.baseUrl}?accion=permitirSuscripciones&idPublicacion=${idPublicacion}`);
  }

  esInteractiva(idPublicacion: number){
    return this.http.get<PermitirM>(`${this.baseUrl}?accion=esInteractiva&idPublicacion=${idPublicacion}`);
  }

  cambiarValorPermitirSuscripciones(permiso: PermitirM){
    return this.http.post<void>(`${this.baseUrl}?accion=cambiarValorPermitirSuscripciones`,permiso);
  }

  cambiarValorEsInteractiva(permiso: PermitirM){
    return this.http.post<void>(`${this.baseUrl}?accion=cambiarValorEsInteractiva`,permiso);
  }
}
