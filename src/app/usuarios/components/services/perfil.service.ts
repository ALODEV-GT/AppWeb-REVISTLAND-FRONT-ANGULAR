import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilM } from '../../../../control/perfil/PerfilM';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorPerfil";

  constructor(private http: HttpClient) { }

  agregarPerfil(nuevoPerfil: PerfilM) {
    return this.http.post<any>(`${this.baseUrl}?accion=crearPerfil`, nuevoPerfil);
  }

  obtenerCategorias() {
    return this.http.get<string[]>(`${this.baseUrl}?accion=obtenerCategorias`);
  }

  obtenerEtiquetas() {
    return this.http.get<string[]>(`${this.baseUrl}?accion=obtenerEtiquetas`);
  }

  obtenerPerfil(nombre: string | undefined) {
    return this.http.get<PerfilM>(`${this.baseUrl}?accion=obtenerPerfil&nombre=${nombre}`);
  }

  obtenerCategoriasUsuario(nombre: string | undefined) {
    return this.http.get<string[]>(`${this.baseUrl}?accion=obtenerCategoriasUsuario&nombre=${nombre}`);
  }

  obtenerEtiquetasUsuario(nombre: string | undefined) {
    return this.http.get<string[]>(`${this.baseUrl}?accion=obtenerEtiquetasUsuario&nombre=${nombre}`);
  }

}
