import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../control/autenticacion/UsuarioM';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilM } from '../../../../control/perfil/PerfilM';
import { FotoM } from '../../../../control/perfil/FotoM';
import { PerfilService } from '../services/perfil.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioM | undefined;
  perfil!: PerfilM | undefined;
  foto: FotoM = new FotoM("", "");

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private perfilService: PerfilService
  ) {

    this.perfilService.obtenerCategorias().subscribe((resp: string[]) => this.allCategorias = resp);
    this.perfilService.obtenerEtiquetas().subscribe((resp: string[]) => this.allEtiquetas = resp);

  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.perfilService.obtenerPerfil(this.usuario?.nombre).subscribe((resp: PerfilM) => {
      if (resp) {
        this.perfil = resp;
        this.foto.contenido = resp.foto.contenido;
        this.formularioPerfil.controls["descripcion"].setValue(resp.descripcion);
        this.formularioPerfil.controls["hobbies"].setValue(resp.hobbies);
        this.formularioPerfil.controls["gustos"].setValue(resp.gustos);

        this.perfilService.obtenerEtiquetasUsuario(this.usuario?.nombre).subscribe((res: string[]) => this.etiquetas = res);
        this.perfilService.obtenerCategoriasUsuario(this.usuario?.nombre).subscribe((res: string[]) => this.categorias = res);
      }
    });


  }

  hayEtiquetas: boolean = true;
  hayCategorias: boolean = true;



  formularioPerfil: FormGroup = this.fb.group({
    descripcion: [`${this.perfil?.descripcion || ""} `, [Validators.required, Validators.minLength(5)]],
    hobbies: [`${this.perfil?.hobbies || ""}`, [Validators.required, Validators.minLength(5)]],
    gustos: [`${this.perfil?.gustos || ""}`, [Validators.required]]
  });

  allCategorias: string[] = [];
  allEtiquetas: string[] = []

  categorias: string[] = [];
  etiquetas: string[] = [];

  cancelarCategoria(categoria: string) {
    let i = this.categorias.indexOf(categoria);
    this.categorias.splice(i, 1);
  }

  agregarCategoria(categoria: string) {
    if (!this.categorias.includes(categoria.toUpperCase())) {
      this.hayCategorias = true;
      this.categorias.push(categoria.toUpperCase());
    }
  }

  guardarPerfil() {
    if (this.formularioPerfil.invalid) {
      this.formularioPerfil.markAllAsTouched();
      return;
    }

    const name: string | undefined = this.usuario?.nombre;
    const descripcion: string = this.formularioPerfil.get('descripcion')?.value;
    const hobbies: string = this.formularioPerfil.get('hobbies')?.value;
    const gustos: string = this.formularioPerfil.get('gustos')?.value;
    const categorias: string[] = this.categorias;
    const etiquetas: string[] = this.etiquetas;
    const foto: FotoM = this.foto;

    if (categorias.length === 0) {
      this.hayCategorias = false;
      return;
    }

    if (etiquetas.length === 0) {
      this.hayEtiquetas = false;
      return;
    }



    const perfil: PerfilM = new PerfilM(name, descripcion, hobbies, gustos, categorias, etiquetas, foto);
    this.perfilService.agregarPerfil(perfil).subscribe((resp: any) => {
      switch (this.usuario?.idTipoCuenta) {
        case 1:
          this.router.navigate(['./editor/publicar'])
          break;
        case 3:
          this.router.navigate(['./usuario/inicio']);
          break;
        default:
          this.router.navigate(['./autenticacion/login']);
          break;
      }
    });
  }

  // Funcionamiento chips

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && !this.etiquetas.includes(value.toUpperCase())) {
      this.hayEtiquetas = true;
      this.etiquetas.push(value.toUpperCase());
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  agregarEtiqueta(etiqueta: string) {
    const value = etiqueta.trim();
    if (value && !this.etiquetas.includes(value.toUpperCase())) {
      this.hayEtiquetas = true;
      this.etiquetas.push(value.toUpperCase());
    }
  }

  remove(etiqueta: string): void {
    const index = this.etiquetas.indexOf(etiqueta);

    if (index >= 0) {
      this.etiquetas.splice(index, 1);
    }
  }

  //Agregar foto

  archivo!: File;
  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.archivo = <File>event.target.files[0];
      this.foto.nombre = this.archivo.name;
      //image preview
      const reader = new FileReader();
      reader.readAsDataURL(this.archivo);
      reader.onload = e => this.foto.contenido = reader.result;
    }
  }

}
