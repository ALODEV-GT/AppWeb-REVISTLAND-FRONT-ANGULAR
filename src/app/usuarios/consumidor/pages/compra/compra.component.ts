import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DescripcionRevistaM } from 'src/control/DescripcionRevista/DescripcionRevistaM';
import { DetalleRevistaService } from '../../services/detalle-revista.service';
import { SuscripcionM } from '../../../../../control/suscripcion/SuscripcionM';
import { SuscripcionService } from '../../services/suscripcion.service';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  detalleRevista!: DescripcionRevistaM;

  constructor(
    private activatedRoute: ActivatedRoute,
    private detalleRevistaService: DetalleRevistaService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private suscripcionService: SuscripcionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ revista }) => this.detalleRevistaService.obtenerDetalleRevista(revista))

    ).subscribe((detalleRevista: DescripcionRevistaM) => this.detalleRevista = detalleRevista);
  }

  miFormulario: FormGroup = this.fb.group({
    tipoPago: ["1", Validators.required],
    fechaCompra: [`${this.fechaActual()}`, Validators.required]
  })

  registrarSuscripcion() {
    const tipoPago: number = this.miFormulario.get("tipoPago")?.value;
    const fechaCompra: string = this.miFormulario.get("fechaCompra")?.value;

    const nombreUsuario: string | undefined = this.usuarioService.getUsuarioAutenticado()?.nombre;

    const suscripcion: SuscripcionM = new SuscripcionM(tipoPago, this.detalleRevista.idRevista,
      fechaCompra, this.fechaFinalizacion(fechaCompra), nombreUsuario, this.costoTotal(), 0, 0, 1);

    this.suscripcionService.registrarSuscripcion(suscripcion).subscribe((r) => {
      this.mostrarSnakBar('Compra realizada')
      this.router.navigate(['./usuario/inicio'])
    });
    
  }

  fechaFinalizacion(fecha: string) {
    let partes = fecha.split('-');

    let fech: Date = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));

    let tipoPago: number = this.miFormulario.get("tipoPago")?.value;

    if (this.costoTotal() < 1) {
      tipoPago = 3;
    }

    if (tipoPago == 1) {
      fech.setDate(fech.getDate() + 30)
    } else if (tipoPago == 2) {
      fech.setDate(fech.getDate() + 365)
    } else {
      fech.setDate(fech.getDate() + 3650)
    }

    const f: string = fech.toISOString();
    const p: string[] = f.split('T');
    return p[0];
  }

  costoTotal(): number {
    const tipoPago: number = this.miFormulario.get("tipoPago")?.value;
    let cantidad: number = 0;

    if (tipoPago == 1) {
      cantidad = this.detalleRevista.precioMensual;
    } else if (tipoPago == 2) {
      cantidad = this.detalleRevista.precioAnual;
    }
    return cantidad;
  }

  fechaActual(): string {
    const fecha: string = new Date(Date.now()).toISOString();
    const partes: string[] = fecha.split('T');
    return partes[0];
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, "ok", {
      duration: 3000,
    });
  }
}
