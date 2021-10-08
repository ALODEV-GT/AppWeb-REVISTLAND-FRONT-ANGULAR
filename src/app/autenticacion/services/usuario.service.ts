import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UsuarioM } from '../../../control/autenticacion/UsuarioM';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  private _usuario: UsuarioM | undefined; //Usuario en sesion

  private baseUrl: string = "http://localhost:8080/REVISTLAND/controladorAutenticacion";

  constructor(private http: HttpClient) {

  }

  getUsuarioAutenticado(): UsuarioM | undefined{
    return this._usuario;
  }

  agregarNuevoUsuario(nuevoUsuario: UsuarioM) {
    return this.http.post<UsuarioM>(`${this.baseUrl}?accion=crear`, nuevoUsuario).pipe(
      tap(resp => {
        console.log(resp);
        this._usuario = resp
      })
    );
  }

  autenticarUsuario(usuario: UsuarioM) {
    return this.http.post<UsuarioM>(`${this.baseUrl}?accion=autenticar`, usuario).pipe(
      tap(resp => {
        console.log(resp);
        this._usuario = resp
      })
    );
  }

  verificarTienePerfil(nombre: string){ 
    return this.http.get<any[]>(`http://localhost:8080/REVISTLAND/controladorAutenticacion?accion=verificarTienePerfil&nombre=${nombre}`);
  }
}
