import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioM } from '../../../control/autenticacion/UsuarioM';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    contrasena: ['', [Validators.required, Validators.minLength(5)]]
  });

  noExiste: boolean = false;

  autenticarUsuario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log("valido")
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const contrasena: string = this.miFormulario.get('contrasena')?.value;

    const usuario: UsuarioM = new UsuarioM(nombre, contrasena, 0);

    this.usuarioService.autenticarUsuario(usuario).subscribe((resp: UsuarioM) => {
      if (resp.idTipoCuenta == 0) {
        this.noExiste = true;
        console.log("No existe");
      } else {

        this.usuarioService.verificarTienePerfil(resp.nombre).subscribe((m) => {
          console.log('tamano: ', m.length)
          if (m.length == undefined) {
            switch (resp.idTipoCuenta) {
              case 1:
                this.router.navigate(['./editor/publicar'])
                break;
              case 2:
                this.router.navigate(['./autenticacion/registro'])
                break;
              case 3:
                this.router.navigate(['./usuario/inicio'])
                break;
              default:
                this.router.navigate(['./autenticacion/registro'])
                break;
            }
          } else {
            switch (resp.idTipoCuenta) {
              case 1:
                this.router.navigate(['./editor/perfil'])
                break;
              case 2:
                this.router.navigate(['./autenticacion/registro']) //Si el admin no creo su perfil
                break;
              case 3:
                this.router.navigate(['./usuario/perfil'])
                break;
              default:
                this.router.navigate(['./autenticacion/registro'])
                break;
            }
          }
        })
      }
    });

  }



}
