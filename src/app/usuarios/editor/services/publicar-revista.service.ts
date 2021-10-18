import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RevistaM } from '../../../../control/publicarRevista/RevistaM';
import { VolumenM } from '../../../../control/publicarRevista/VolumenM';
import { PublicacionM } from '../../../../control/publicarRevista/PublicacionM';

export interface Id {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class PublicarRevistaService {

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorPublicarRevista";

  constructor(private http: HttpClient) { }

  public subirArchivoVolumen(file: File) {
    const formData: FormData = new FormData();

    formData.append("datafile", file, file.name);

    return this.http.post<Id>(`${this.baseUrl}?accion=subirArchivoRevista`, formData);
  }

  public agregarRevista(nuevaRevista: RevistaM) {
    return this.http.post<Id>(`${this.baseUrl}?accion=crearRevista`, nuevaRevista);
  }

  public agregarVolumen(nuevoVolumen: VolumenM) {
    return this.http.post<void>(`${this.baseUrl}?accion=crearVolumen`, nuevoVolumen);
  }

  public agregarPublicacion(nuevaPublicacion: PublicacionM) {
    return this.http.post<void>(`${this.baseUrl}?accion=crearPublicacion`, nuevaPublicacion);
  }

  public eliminarVolumen(idArchivo: number) {
    return this.http.get<void>(`${this.baseUrl}?accion=eliminarVolumen&idArchivo=${idArchivo}`);
  }
}
