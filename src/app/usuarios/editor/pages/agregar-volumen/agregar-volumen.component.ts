import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacion/services/usuario.service';
import { UsuarioM } from 'src/control/autenticacion/UsuarioM';
import { VolumenM } from 'src/control/publicarRevista/VolumenM';
import { Id, PublicarRevistaService } from '../../services/publicar-revista.service';

@Component({
  selector: 'app-agregar-volumen',
  templateUrl: './agregar-volumen.component.html',
  styleUrls: ['./agregar-volumen.component.css']
})
export class AgregarVolumenComponent implements OnInit {

  usuario: UsuarioM | undefined;
  idRevista!: number;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService,
    private router: Router,
    private publicarRevistaService: PublicarRevistaService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.idRevista = this.activatedRoute.snapshot.params.revista;
  }

  archivoSubido: boolean = true;

  miFormulario: FormGroup = this.fb.group({
    fechaPublicacion: [`${this.fechaActual()}`, Validators.required],
    nombreVolumen: ["", Validators.required]
  })

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }

  ngOnInit(): void {
    
  }

  publicarVolumen() {
    if (!this.usuario) {
      this.router.navigate(['./autenticacion/login']);
      return;
    }

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    if (!this.archivo) {
      this.archivoSubido = false;
      return;
    }

    this.subirArchivo(this.idRevista);
    
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

  guardarVolumen(idRevista: number, idArchivo: number) {
    const nombreVolumen = this.miFormulario.get("nombreVolumen")?.value;
    const fechaPublicacion: string = this.miFormulario.get('fechaPublicacion')?.value;
    const nuevoVolumen: VolumenM = new VolumenM(0, idRevista, nombreVolumen, fechaPublicacion, idArchivo);
    //El valor de idVolumen por el momento no esa en uso.
    this.publicarRevistaService.agregarVolumen(nuevoVolumen).subscribe((r) => {
      this.mostrarSnakBar("Se ha publicado el volumen");
      this.router.navigate(['./editor/mis-revistas'])
    });
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }

  limpiarForm() {
    this.miFormulario.reset();
  }
}
