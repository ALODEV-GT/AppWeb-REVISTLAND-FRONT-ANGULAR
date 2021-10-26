import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { PerfilService } from 'src/app/usuarios/components/services/perfil.service';
import { Fecha } from 'src/app/services/fecha.service';
import { FechaService } from '../../../../services/fecha.service';
import { AnuncioM } from '../../../../../control/anuncios/AnuncioM';
import { Id, PublicarRevistaService } from '../../../editor/services/publicar-revista.service';
import { AnunciosService, Precio } from '../../services/anuncios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FotoM } from 'src/control/perfil/FotoM';

@Component({
  selector: 'app-pagina-anuncios',
  templateUrl: './pagina-anuncios.component.html',
  styleUrls: ['./pagina-anuncios.component.css']
})
export class PaginaAnunciosComponent implements OnInit {

  tipoAnuncio: string[] = [];

  hayEtiquetas: boolean = true;
  hayCategorias: boolean = true;
  archivoSubido: boolean = true;
  cantidadDiasInvalido: boolean = false;
  idTipoAnuncio:number = 2;
  costoTotal: number = 0;
  textoInvalidoAnuncio: boolean = false;
  nombreInvalidoAnunciante: boolean = false;


  allAnunciantes: string[] = [];
  allCategorias: string[] = [];
  allEtiquetas: string[] = []

  categorias: string[] = [];
  etiquetas: string[] = [];

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private fechaService: FechaService,
    private anunciosService: AnunciosService,
    private snackBar: MatSnackBar
  ) {
    this.perfilService.obtenerCategorias().subscribe((resp: string[]) => this.allCategorias = resp);
    this.perfilService.obtenerEtiquetas().subscribe((resp: string[]) => this.allEtiquetas = resp);
    this.anunciosService.obtenerEmpresasAnunciantes().subscribe((resp: string[])=> this.allAnunciantes = resp);
  }

  ngOnInit(): void {
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaCompra"].setValue(resp.fecha);
    });
  }

  miFormulario: FormGroup = this.fb.group({
    nombreAnunciante: ["", Validators.required],
    tipoAnuncio: ["2", Validators.required],
    fechaCompra: ["", Validators.required],
    cantidadDias: ["", Validators.required],
    textoAnuncio: [""]
  })

  guardarAnuncio() {

    if (!this.validaciones()) {
      return;
    }

    const tipoAnuncio: number = this.miFormulario.get("tipoAnuncio")?.value;
    const nombreAnunciante: string = this.miFormulario.get("nombreAnunciante")?.value;
    const fechaCompra: string = this.miFormulario.get('fechaCompra')?.value;
    const cantidadDias: number = this.miFormulario.get('cantidadDias')?.value;
    const categorias: string[] = this.categorias;
    const etiquetas: string[] = this.etiquetas;
    const textoAnuncio: string = this.miFormulario.get('textoAnuncio')?.value;
    let anuncio: AnuncioM;

    if (tipoAnuncio == 1) {
      this.anunciosService.agregarTextoAnuncio(textoAnuncio).subscribe((resp: Id) => {
        anuncio = new AnuncioM(tipoAnuncio, nombreAnunciante, fechaCompra,
          cantidadDias, categorias, etiquetas, resp.id);
        console.log(anuncio);

        this.anunciosService.agregarAnuncio(anuncio).subscribe(() => {
          this.mostrarSnakBar("Se ha agregado el anuncio, correctamente");
        });

      });
    } else if (tipoAnuncio == 2) {
      if (this.archivo != null) {
        this.anunciosService.agregarImagenAnuncio(this.foto).subscribe((resp: Id) => {
          anuncio = new AnuncioM(tipoAnuncio, nombreAnunciante, fechaCompra,
            cantidadDias, categorias, etiquetas, undefined, resp.id);
          console.log(anuncio);
          this.anunciosService.agregarAnuncio(anuncio).subscribe(() => {
            this.mostrarSnakBar("Se ha agregado el anuncio, correctamente");
          });

        });
      }
    } else if (tipoAnuncio == 3) {
      this.anunciosService.agregarLinkVideo(textoAnuncio).subscribe((resp: Id) => {
        anuncio = new AnuncioM(tipoAnuncio, nombreAnunciante, fechaCompra,
          cantidadDias, categorias, etiquetas, undefined, undefined, resp.id);
        console.log(anuncio);

        this.anunciosService.agregarAnuncio(anuncio).subscribe(() => {
          this.mostrarSnakBar("Se ha agregado el anuncio, correctamente");
        });

      });
    }
  }

  validaciones(): boolean {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return false;
    }

    const nombreAnunciante: string = this.miFormulario.get('nombreAnunciante')?.value;
    this.nombreInvalidoAnunciante = false;
    if (nombreAnunciante.trim().length == 0) {
      this.nombreInvalidoAnunciante = true;
      return false;
    }

    const cantidadDias: string = this.miFormulario.get('cantidadDias')?.value;
    this.cantidadDiasInvalido = false;
    if (Number(cantidadDias) < 0 || isNaN(Number(cantidadDias))) {
      this.cantidadDiasInvalido = true;
      return false;
    }

    if (this.categorias.length === 0) {
      this.hayCategorias = false;
      return false;
    }

    if (this.etiquetas.length === 0) {
      this.hayEtiquetas = false;
      return false;
    }

    const tipoAnuncio: number = this.miFormulario.get('tipoAnuncio')?.value;
    const textoAnuncio: string = this.miFormulario.get('textoAnuncio')?.value;

    if (tipoAnuncio == 1 || tipoAnuncio == 3) {
      this.textoInvalidoAnuncio = false;
      if (textoAnuncio.trim().length == 0) {
        this.textoInvalidoAnuncio = true;
        return false;
      }
    } else {
      this.archivoSubido = true;
      if (!this.archivo) {
        this.archivoSubido = false;
        return false;
      }
    }

    return true;
  }

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }

  mostrarAgregarContenidoAnuncio() {
    const tipoAnuncio = this.miFormulario.get('tipoAnuncio')?.value;
    if (tipoAnuncio == 1 ) {
      this.idTipoAnuncio =1;
    }else if(tipoAnuncio == 2){
      this.idTipoAnuncio=2;
    } else if(tipoAnuncio == 3){
      this.idTipoAnuncio=3;
    }
    this.cambiarTotal();
  }

  cambiarInputAnunciante(anunciante: string) {
    this.miFormulario.controls["nombreAnunciante"].setValue(anunciante);
  }

  cambiarTotal() {
    const cantidadDias: number = this.miFormulario.get("cantidadDias")?.value;
    const idTipoAnuncio: number = this.miFormulario.get("tipoAnuncio")?.value;
    this.anunciosService.obtenerPrecioAnuncio(idTipoAnuncio).subscribe((res: Precio) => {
      this.costoTotal = res.precio * cantidadDias;
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

  archivo!: File | null;

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

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }

  //Agregar foto
  foto: FotoM = new FotoM("", "");

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
