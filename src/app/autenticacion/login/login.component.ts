import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioM } from '../../../control/autenticacion/UsuarioM';
import { FechaService, Fecha } from '../../services/fecha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private fechaService: FechaService
  ) { }

  fechaActual! : string; 

  fechaInvalida: boolean = false;

  ngOnInit(): void {
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaActual"].setValue(resp.fecha);
      this.fechaActual = resp.fecha;
    });
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    contrasena: ['', [Validators.required, Validators.minLength(5)]],
    fechaActual: ['', Validators.required],
  });

  noExiste: boolean = false;

  autenticarUsuario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const fechaActual: string = this.miFormulario.get('fechaActual')?.value;
    if (this.esInvalidoFecha(this.fechaActual, fechaActual )) {
      return;
    }

    console.log("valido")
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const contrasena: string = this.miFormulario.get('contrasena')?.value;

    const fechaO: Fecha = {
      fecha: fechaActual,
    }

    const usuario: UsuarioM = new UsuarioM(nombre, contrasena, 0);

    this.usuarioService.autenticarUsuario(usuario).subscribe((resp: UsuarioM) => {
      if (resp.idTipoCuenta == 0) {
        this.noExiste = true;
        console.log("No existe");
      } else {

        this.fechaService.cambiarFecha(fechaO).subscribe(r => console.log(r));

        this.usuarioService.verificarTienePerfil(resp.nombre).subscribe((m) => {
          console.log(m);

          if (m.length == undefined) {
            switch (resp.idTipoCuenta) {
              case 1:
                this.router.navigate(['./editor/publicar'])
                break;
              case 2:
                this.router.navigate(['./administrador/costo'])
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
                this.router.navigate(['./administrador/costo'])
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

  esInvalidoFecha(fechaActual: string, nuevaFecha: string): boolean {
    let invalido: boolean = false;
    this.fechaInvalida = false;
    const primeraFecha = new Date(fechaActual);
    const segundaFecha = new Date(nuevaFecha);
    if (segundaFecha < primeraFecha) {
      invalido = true;
      this.fechaInvalida = true;
    }
    return invalido;
  }



}
