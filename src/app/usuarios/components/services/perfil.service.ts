import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilM } from '../../../../control/perfil/PerfilM';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorPerfil";

  constructor(private http: HttpClient) {}

  agregarPerfil(nuevoPerfil: PerfilM){
    return this.http.post<any>(`${this.baseUrl}?accion=crearPerfil`, nuevoPerfil);
  }
}
