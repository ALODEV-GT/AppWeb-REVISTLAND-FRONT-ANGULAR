import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoCuenta } from '../../../control/autenticacion/TipoCuenta.enum';
import { UsuarioM } from '../../../control/autenticacion/UsuarioM';
import { NombreUsuarioValidatorService } from '../services/nombre-usuario-validator.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: [
    '../login/login.component.css'
  ]
})
export class RegistroComponent implements OnInit {

  tiposCuenta: string[] = [];



  constructor(
    private fb: FormBuilder,
    private nombreUsuarioValidator: NombreUsuarioValidatorService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.construirArregloTipoCuenta();
  }

  construirArregloTipoCuenta() {
    for (let tipo in TipoCuenta) {
      this.tiposCuenta.push(tipo);
    }
  }

  getErrorNombre(): string {
    const errors = this.miFormulario.get('nombre')?.errors;
    if (errors?.required) {
      return "Este campo es obligatorio";
    } else if (errors?.minlength) {
      return "Debe tener almenos 5 caracteres"
    } else if (errors?.usuarioUsado) {
      return "Este nombre de usuario ya esta en uso"
    }
    return "Hola mundo";
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)], [this.nombreUsuarioValidator]],
    pContrasena: ['', [Validators.required, Validators.minLength(5)]],
    sContrasena: ['', [Validators.required, Validators.minLength(5)]],
    tipoCuenta: ['', Validators.required]
  },
    {
      validators: [this.contrasenasIguales('pContrasena', 'sContrasena')]
    }
  )

  contrasenasIguales(contra1: string, contra2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(contra1)?.value;
      const pass2 = formGroup.get(contra2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(contra2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      formGroup.get(contra2)?.setErrors(null);

      return null;
    }
  }

  campoEsValido(control: string) {
    return this.miFormulario.controls[control].errors && this.miFormulario.controls[control].touched;
  }

  nuevoUsuario!: UsuarioM;

  crearUsuario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const nombre: string = this.miFormulario.get('nombre')?.value;
    const contrasena: string = this.miFormulario.get('sContrasena')?.value;
    const tipo: TipoCuenta = this.miFormulario.get('tipoCuenta')?.value;

    const nuevoUsuario: UsuarioM = new UsuarioM(nombre, contrasena, this.obtenerIdTipoCuenta(tipo));

    this.usuarioService.agregarNuevoUsuario(nuevoUsuario).subscribe((resp: UsuarioM) => {
      switch (tipo) {
        case TipoCuenta.EDITOR:
          this.router.navigate(['./editor/perfil'])
          break;
        case TipoCuenta.NORMAL:
          this.router.navigate(['./usuario/perfil'])
          break;
      }



    });

    this.miFormulario.reset();
  }

  private obtenerIdTipoCuenta(tipo: TipoCuenta): number {
    switch (tipo) {
      case TipoCuenta.EDITOR:
        return 1;
      case TipoCuenta.NORMAL:
        return 3;
    }
  }

}
