import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DescripcionRevistaM } from '../../../../control/DescripcionRevista/DescripcionRevistaM';
import { RevistaVolumenM } from '../../../../control/volumenes-revista-consumidor/RevistaVolumenM';

@Injectable({
  providedIn: 'root'
})
export class DetalleRevistaService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorDescripcionRevista";

  constructor(private http: HttpClient) { }

  obtenerDetalleRevista(idRevista: number) {
    return this.http.get<DescripcionRevistaM>(`${this.baseUrl}?accion=obtenerDescripcionRevista&idRevista=${idRevista}`);
  }

  obtenerVolumenesRevista(idRevista: number) {
    return this.http.get<RevistaVolumenM>(`${this.baseUrl}?accion=obtenerVolumenesRevista&idRevista=${idRevista}`);
  }
}
