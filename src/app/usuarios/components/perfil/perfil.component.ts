import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../control/autenticacion/UsuarioM';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilM } from '../../../../control/perfil/PerfilM';
import { FotoM } from '../../../../control/perfil/FotoM';
import { PerfilService } from '../services/perfil.service';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

interface Fruit{
  name: string
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioM | undefined;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private perfilService: PerfilService
  ) { 
    this.usuario = this.usuarioService.getUsuarioAutenticado();
  }

  ngOnInit(): void {
  }

  hayEtiquetas: boolean = true;
  hayCategorias: boolean = true;


  formularioPerfil: FormGroup = this.fb.group({
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
    hobbies: ['', [Validators.required, Validators.minLength(5)]],
    gustos: ['',[Validators.required]]
  });

  allCategorias: string[] = ['FUTBOL','MUSICA','NATURALEZA', 'AMOR'];
  allEtiquetas: string[] = ['ETIQUETA1','ETIQUETA2','ETIQUETA3']

  categorias: string[] = [];
  etiquetas: string[] = [];

  cancelarCategoria(categoria: string){
    let i = this.categorias.indexOf(categoria);
    this.categorias.splice(i,1);
  }

  agregarCategoria(categoria: string){
    if(!this.categorias.includes(categoria.toUpperCase())){
      this.hayCategorias=true;
      this.categorias.push(categoria.toUpperCase());
    }
  }

  guardarPerfil(){
    if (this.formularioPerfil.invalid) {
      this.formularioPerfil.markAllAsTouched();
      return;
    }

    const name: string = "nombreUsuario";
    const descripcion: string = this.formularioPerfil.get('descripcion')?.value;
    const hobbies: string = this.formularioPerfil.get('hobbies')?.value;
    const gustos: string = this.formularioPerfil.get('gustos')?.value;
    const categorias: string[] = this.categorias;
    const etiquetas: string[] = this.etiquetas;

    if(categorias.length === 0  ){
      this.hayCategorias = false;
      return;
    }

    if (etiquetas.length === 0) {
      this.hayEtiquetas = false;
      return;
    }

    console.log("SE ENVIARON LOS DATOS");

    const foto: FotoM = new FotoM('foto','contenido');

    const perfil: PerfilM = new PerfilM(name,descripcion,hobbies,gustos,categorias, etiquetas, foto);
    this.perfilService.agregarPerfil(perfil).subscribe( (resp:any) => {console.log('respuesta')});


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
      this.hayEtiquetas=true;
      this.etiquetas.push(value.toUpperCase());
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  agregarEtiqueta(etiqueta: string){
    const value = etiqueta.trim();
    if(value && !this.etiquetas.includes(value.toUpperCase())){
      this.hayEtiquetas=true;
      this.etiquetas.push(value.toUpperCase());
    }
  }

  remove(etiqueta: string): void {
    const index = this.etiquetas.indexOf(etiqueta);

    if (index >= 0) {
      this.etiquetas.splice(index, 1);
    }
  }


}
