import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacion/services/usuario.service';
import { UsuarioM } from 'src/control/autenticacion/UsuarioM';
import { SuscripcionService } from '../../services/suscripcion.service';
import { MiRevistaConsumidorM } from '../../../../../control/revista-cosumidor/MiRevistaConsumidorM';

@Component({
  selector: 'app-mis-revistas',
  templateUrl: './mis-revistas.component.html',
  styleUrls: ['./mis-revistas.component.css']
})
export class MisRevistasComponent  {

  usuario: UsuarioM | undefined;
  misRevistas!: MiRevistaConsumidorM[];

  constructor(private suscripcionService: SuscripcionService, private usuarioService: UsuarioService){
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.suscripcionService.obtenerRevistasSuscritas(this.usuario?.nombre).subscribe((res: MiRevistaConsumidorM[]) =>{
      console.log(res);
      
      this.misRevistas = res;
    } );
  }

}
