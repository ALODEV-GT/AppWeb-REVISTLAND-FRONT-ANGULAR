import { Component, Input } from '@angular/core';
import { RevistaVolumenM } from 'src/control/volumenes-revista-consumidor/RevistaVolumenM';
import { PermisosRevistaService } from '../../services/permisos-revista.service';
import { PermitirM } from '../../../../../control/permisos-revista/PermitirM';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from 'src/control/autenticacion/UsuarioM';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentarioM } from 'src/control/interacciones/ComentarioM';
import { InteraccionesService } from 'src/app/usuarios/consumidor/services/interacciones.service';
import { DetalleRevistaService } from 'src/app/usuarios/consumidor/services/detalle-revista.service';
import { DescargarArchivoService } from '../../../consumidor/services/descargar-archivo.service';
import { PublicarRevistaService } from '../../services/publicar-revista.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fecha, FechaService } from '../../../../services/fecha.service';

@Component({
  selector: 'app-revista-publicada',
  templateUrl: './revista-publicada.component.html',
  styleUrls: ['./revista-publicada.component.css']
})
export class RevistaPublicadaComponent {

  @Input() revista!: RevistaVolumenM;
  @Input() idPublicacion!: number;

  permitirSuscripciones!: PermitirM;
  permitirInteracciones!: PermitirM;
  usuario!: UsuarioM | undefined;
  baseUrl: string = this.descargarArchivoService.getBaseUrlArchivos();


  verComentarios: boolean = false;

  constructor(
    private permisosRevistaService: PermisosRevistaService,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private interaccionesService: InteraccionesService,
    private detalleRevistaService: DetalleRevistaService,
    private descargarArchivoService: DescargarArchivoService,
    private publicarRevistaService: PublicarRevistaService,
    private snackBar: MatSnackBar,
    private fechaService: FechaService
  ) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
  }

  miFormulario: FormGroup = this.fb.group({
    comentario: ['', [Validators.required]],
    fechaPublicacion: [`${this.fechaActual()}`, [Validators.required]],
  });

  ngOnInit(): void {
    this.permisosRevistaService.esInteractiva(this.idPublicacion).subscribe((resp: PermitirM) => { this.permitirInteracciones = resp });
    this.permisosRevistaService.permitirSuscripciones(this.idPublicacion).subscribe((resp: PermitirM) => { this.permitirSuscripciones = resp });
    this.fechaService.obtenerFecha().subscribe((resp: Fecha) => {
      this.miFormulario.controls["fechaPublicacion"].setValue(resp.fecha);
    });
  }

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
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

  obtenerDatosRevista() {
    this.detalleRevistaService.obtenerVolumenesRevista(this.revista.idRevista)
      .subscribe((res: RevistaVolumenM) => {
        this.revista = res;
      });
  }

  slideSuscripcion() {
    this.permitirSuscripciones.permitir = !this.permitirSuscripciones.permitir;
    const permiso: PermitirM = new PermitirM(0, this.permitirSuscripciones.permitir, this.idPublicacion);
    this.permisosRevistaService.cambiarValorPermitirSuscripciones(permiso).subscribe(r => r);
  }

  slideEsInteractiva() {
    this.permitirInteracciones.permitir = !this.permitirInteracciones.permitir;
    const permiso: PermitirM = new PermitirM(0, this.permitirInteracciones.permitir, this.idPublicacion);
    this.permisosRevistaService.cambiarValorEsInteractiva(permiso).subscribe(r => r);
  }

  mostrarComentarios() {
    this.verComentarios = !this.verComentarios;
  }

  eliminarVolumen(idArchivo: number) {
    this.publicarRevistaService.eliminarVolumen(idArchivo).subscribe((r) => {
      this.mostrarSnakBar("Se ha eliminado el volumen");
      this.obtenerDatosRevista();
    });

  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }

}
