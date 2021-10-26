import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Id } from '../../editor/services/publicar-revista.service';
import { AnuncioM } from '../../../../control/anuncios/AnuncioM';
import { FotoM } from '../../../../control/perfil/FotoM';

export interface TextoAnuncioM {
  textoAnuncio: string
}

export interface Precio {
  precio: number;
}

export interface AnuncioMostrarM {
  idAnuncio: number,
  idTipoAnuncio: number,
  textoAnuncio: string,
  linkVideo: string,
  imagen: string
}

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  baseUrl: string = "http://localhost:8080/REVISTLAND/controladorAnuncios"

  constructor(private http: HttpClient) { }

  obtenerPrecioAnuncio(idTipoAnuncio: number) {
    return this.http.get<Precio>(`${this.baseUrl}?accion=obtenerPrecioAnuncio&tipoAnuncio=${idTipoAnuncio}`);
  }

  agregarTextoAnuncio(texto: string) {
    const textoAnuncio: TextoAnuncioM = {
      textoAnuncio: texto
    }
    return this.http.post<Id>(`${this.baseUrl}?accion=agregarTextoAnuncio`, textoAnuncio);
  }

  agregarImagenAnuncio(foto: FotoM) {
    return this.http.post<Id>(`${this.baseUrl}?accion=agregarImagenAnuncio`, foto);
  }

  agregarAnuncio(anuncio: AnuncioM) {
    return this.http.post<void>(`${this.baseUrl}?accion=agregarAnuncio`, anuncio);
  }

  agregarLinkVideo(link: string) {
    const linkVideo: TextoAnuncioM = {
      textoAnuncio: link
    }
    return this.http.post<Id>(`${this.baseUrl}?accion=agregarVideoAnuncio`, linkVideo);
  }

  obtenerEmpresasAnunciantes() {
    return this.http.get<string[]>(`${this.baseUrl}?accion=obtenerAnunciantes`);
  }

  obtenerRecomendacionesAnuncios(nombreUsuario: string | undefined) {
    return this.http.get<AnuncioMostrarM[]>(`${this.baseUrl}?accion=obtenerRecomendacionesAnuncios&nombre=${nombreUsuario}`);
  }


}
