import { Component, OnInit } from '@angular/core';
import { RevistaVolumenM } from '../../../../../control/volumenes-revista-consumidor/RevistaVolumenM';
import { DetalleRevistaService } from '../../../consumidor/services/detalle-revista.service';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../../control/autenticacion/UsuarioM';

@Component({
  selector: 'app-mis-revistas',
  templateUrl: './mis-revistas.component.html',
  styleUrls: ['./mis-revistas.component.css']
})
export class MisRevistasComponent implements OnInit {

  revistas!: RevistaVolumenM[];
  usuario: UsuarioM | undefined;

  constructor(
    private detalleRevistaService: DetalleRevistaService,
    private usuarioService: UsuarioService
  ) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.detalleRevistaService.obtenerRevistas(this.usuario?.nombre).subscribe((res: RevistaVolumenM[]) => {
      this.revistas = res;
    });
  }

  ngOnInit(): void {
  }

}
