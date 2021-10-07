import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NombreUsuarioValidatorService implements AsyncValidator{

  constructor(private http: HttpClient) { 

  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const nombreUsuario = control.value;
    console.log(nombreUsuario);
    return this.http.get<any[]>(`http://localhost:8080/REVISTLAND/controladorAutenticacion?accion=validarNombreUsuario&nombre=${nombreUsuario}`)
    .pipe(
      map(resp => {
        console.log("Respuest: ")
        console.log(resp)
        return (resp.length === 0 )? null: {usuarioUsado: true }
      })
    );
  }
}
