import { Component, OnInit } from '@angular/core';
import { DetalleRevistaService } from '../../services/detalle-revista.service';
import { RevistaVolumenM } from '../../../../../control/volumenes-revista-consumidor/RevistaVolumenM';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../../control/autenticacion/UsuarioM';
import { DescargarArchivoService } from '../../services/descargar-archivo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentarioM } from '../../../../../control/interacciones/ComentarioM';
import { InteraccionesService } from '../../services/interacciones.service';
import { MeGustaM } from '../../../../../control/interacciones/MeGustaM';
import { PermisosRevistaService } from '../../../editor/services/permisos-revista.service';
import { PermitirM } from '../../../../../control/permisos-revista/PermitirM';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fecha, FechaService } from '../../../../services/fecha.service';

@Component({
  selector: 'app-volumenes',
  templateUrl: './volumenes.component.html',
  styleUrls: ['./volumenes.component.css']
})
export class VolumenesComponent implements OnInit {

  revista!: RevistaVolumenM;
  usuario: UsuarioM | undefined;
  idRevista!: number;
  verComentarios: boolean = false;

  baseUrl: string = this.descargarArchivoService.getBaseUrlArchivos();
  permitirInteracciones: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private detalleRevistaService: DetalleRevistaService,
    private usuarioService: UsuarioService,
    private descargarArchivoService: DescargarArchivoService,
    private fb: FormBuilder,
    private interaccionesService: InteraccionesService,
    private permisosRevistaService: PermisosRevistaService,
    private snackBar: MatSnackBar,
    private fechaService: FechaService
  ) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ revista }) => this.detalleRevistaService.obtenerVolumenesRevista(revista))
    ).subscribe((res: RevistaVolumenM) => {
      this.revista = res;
      this.permisosRevistaService.esInteractiva(this.revista.idPublicacion).subscribe((res: PermitirM) => {
        this.permitirInteracciones = res.permitir;
      });
    });

    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaPublicacion"].setValue(resp.fecha);
    });
  }

  miFormulario: FormGroup = this.fb.group({
    comentario: ['', [Validators.required]],
    fechaPublicacion: [`${this.fechaActual()}`, [Validators.required]],
  });

  verArchivo(idArchivo: number) {
    this.descargarArchivoService.obtenerDetalleRevista(idArchivo).subscribe(r => console.log(r));
    console.log("cargando el archivo ", idArchivo);
  }

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }

  obtenerDatosRevista() {
    this.activatedRoute.params.pipe(
      switchMap(({ revista }) => this.detalleRevistaService.obtenerVolumenesRevista(revista))
    ).subscribe((res: RevistaVolumenM) => {
      this.revista = res;
    });
  }

  accionarLike() {
    if (!this.permitirInteracciones) {
      this.mostrarSnakBar('El editor ha desactivado las interacciones para esta revista');
      return;
    }

    const fechaComentario: string = this.miFormulario.get('fechaPublicacion')?.value;
    const meGusta: MeGustaM = new MeGustaM(this.usuario?.nombre, fechaComentario, this.revista.idPublicacion);
    this.interaccionesService.meGusta(meGusta).subscribe(r => this.obtenerDatosRevista());
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }

  mostarComentarios() {
    this.verComentarios = !this.verComentarios;
  }

  comentar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    const contenido: string = this.miFormulario.get('comentario')?.value;
    const fechaComentario: string = this.miFormulario.get('fechaPublicacion')?.value;
    if (contenido.trim().length == 0) {
      return;
    }

    const comentario: ComentarioM = new ComentarioM(this.usuario?.nombre, contenido, fechaComentario, this.revista.idPublicacion);
    this.interaccionesService.comentar(comentario).subscribe(r => {
      this.miFormulario.controls["comentario"].setValue("");
      this.obtenerDatosRevista()
    });
  }
}
