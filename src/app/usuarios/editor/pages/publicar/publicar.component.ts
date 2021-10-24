import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { PerfilService } from 'src/app/usuarios/components/services/perfil.service';
import { UsuarioM } from 'src/control/autenticacion/UsuarioM';
import { UsuarioService } from 'src/app/autenticacion/services/usuario.service';
import { RevistaM } from 'src/control/publicarRevista/RevistaM';
import { VolumenM } from '../../../../../control/publicarRevista/VolumenM';
import { PublicacionM } from 'src/control/publicarRevista/PublicacionM';
import { Id, PublicarRevistaService } from '../../services/publicar-revista.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fecha, FechaService } from '../../../../services/fecha.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private usuarioService: UsuarioService,
    private publicarRevistaService: PublicarRevistaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fechaService: FechaService    
  ) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.perfilService.obtenerCategorias().subscribe((resp: string[]) => this.allCategorias = resp);
    this.perfilService.obtenerEtiquetas().subscribe((resp: string[]) => this.allEtiquetas = resp);
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", Validators.required],
    descripcion: ["", Validators.required],
    costoMes: ["", Validators.required],
    costoAnio: ["", Validators.required],
    fechaPublicacion: [`${this.fechaActual()}`, Validators.required],
    nobrePrimerVolumen: ["", Validators.required]
  })

  ngOnInit(): void {
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaPublicacion"].setValue(resp.fecha);
    });
  }

  usuario: UsuarioM | undefined;

  hayEtiquetas: boolean = true;
  hayCategorias: boolean = true;
  costoMesInvalido: boolean = false;
  costoAnioInvalido: boolean = false;
  archivoSubido: boolean = true;

  allCategorias: string[] = [];
  allEtiquetas: string[] = []

  categorias: string[] = [];
  etiquetas: string[] = [];

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }

  publicarRevista() {

    if (!this.usuario) {
      this.router.navigate(['./autenticacion/login']);
      return;
    }

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    if (this.categorias.length === 0) {
      this.hayCategorias = false;
      return;
    }

    if (this.etiquetas.length === 0) {
      this.hayEtiquetas = false;
      return;
    }

    const costoMes: string = this.miFormulario.get('costoMes')?.value;
    const costoAnio: string = this.miFormulario.get('costoAnio')?.value;
    if (Number(costoMes) < 0 || isNaN(Number(costoMes))) {
      this.costoMesInvalido = true;
      return;
    }

    if (Number(costoAnio) < 0 || isNaN(Number(costoAnio))) {
      this.costoAnioInvalido = true;
      return;
    }

    if (!this.archivo) {
      this.archivoSubido = false;
      return;
    }

    this.guardarRevista();

  }

  crearPublicacion(idRevista: number) {
    //Crear publicacion
    const fechaPublicacionP: string = this.miFormulario.get('fechaPublicacion')?.value;
    const nombreUsuario: string | undefined = this.usuario?.nombre;
    const nuevaPublicacion: PublicacionM = new PublicacionM(0, fechaPublicacionP, idRevista, nombreUsuario);
    this.publicarRevistaService.agregarPublicacion(nuevaPublicacion).subscribe((r) => {
      this.mostrarSnakBar('Se ha publicado tu revista');
      this.limpiarForm();
      this.router.navigate(['/editor/mis-revistas']);
    });
  }

  guardarVolumen(idRevista: number, idArchivo: number) {
    //Guardar volumen
    const nombreVolumen = this.miFormulario.get("nobrePrimerVolumen")?.value;
    const fechaPublicacion: string = this.miFormulario.get('fechaPublicacion')?.value;
    const nuevoVolumen: VolumenM = new VolumenM(0, idRevista, nombreVolumen, fechaPublicacion, idArchivo);
    this.publicarRevistaService.agregarVolumen(nuevoVolumen).subscribe((r) => {
      this.crearPublicacion(idRevista);
    });

  }

  guardarRevista() {
    //Guardar revista
    const nombre: string = this.miFormulario.get('nombre')?.value;
    const descripcion: string = this.miFormulario.get('descripcion')?.value;
    const costoMes: string = this.miFormulario.get('costoMes')?.value;
    const costoAnio: string = this.miFormulario.get('costoAnio')?.value;

    const nuevaRevista: RevistaM = new RevistaM(0, nombre, descripcion, Number(costoMes), Number(costoAnio), 1, 1, this.categorias, this.etiquetas);
    this.publicarRevistaService.agregarRevista(nuevaRevista).subscribe((resp: Id) => {
      console.log("El id de la revista es: " + resp.id);
      // Subir archivo
      this.subirArchivo(resp.id);

    });
  }

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

  //Agregar archivo

  archivo!: File | null;
  fileUpload(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files != null) {
      this.archivo = files.item(0);
      console.log(this.archivo);

    }
  }

  subirArchivo(idRevista: number) {
    if (this.archivo != null) {
      this.publicarRevistaService.subirArchivoVolumen(this.archivo).subscribe((resp: Id) => {
        this.guardarVolumen(idRevista, resp.id);
      });
    }
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }

  limpiarForm() {
    this.miFormulario.reset();
    this.categorias = [];
    this.etiquetas = [];
  }
}
