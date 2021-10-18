import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from '../../services/recomendaciones.service';
import { RecomendacionM } from '../../../../../control/recomendacion/RecomendacionM';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from 'src/control/autenticacion/UsuarioM';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  usuario: UsuarioM | undefined;
  recomendaciones!: RecomendacionM[];

  constructor(private recomendacionesService: RecomendacionesService, private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.recomendacionesService.obtenerRecomendaciones(this.usuario?.nombre).subscribe((res: RecomendacionM[]) => {
      this.recomendaciones = res;
      console.log(res);
    }
    );
  }

  ngOnInit(): void {

  }

}
