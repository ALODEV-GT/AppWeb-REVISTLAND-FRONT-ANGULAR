import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentarioM } from '../../../../control/interacciones/ComentarioM';
import { MeGustaM } from '../../../../control/interacciones/MeGustaM';

@Injectable({
  providedIn: 'root'
})
export class InteraccionesService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorInteracciones";

  constructor(private http: HttpClient) { }

  comentar(comentario: ComentarioM){
    return this.http.post<void>(`${this.baseUrl}?accion=comentar`,comentario);
  }

  meGusta(meGusta: MeGustaM){
    return this.http.post<void>(`${this.baseUrl}?accion=darMeGusta`,meGusta);
  }
}
