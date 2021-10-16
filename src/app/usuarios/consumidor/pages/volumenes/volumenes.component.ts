import { Component, OnInit } from '@angular/core';
import { DetalleRevistaService } from '../../services/detalle-revista.service';
import { RevistaVolumenM } from '../../../../../control/volumenes-revista-consumidor/RevistaVolumenM';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../../control/autenticacion/UsuarioM';

@Component({
  selector: 'app-volumenes',
  templateUrl: './volumenes.component.html',
  styleUrls: ['./volumenes.component.css']
})
export class VolumenesComponent implements OnInit {

  revista!: RevistaVolumenM;
  usuario: UsuarioM | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private detalleRevistaService: DetalleRevistaService,
    private usuarioService: UsuarioService
    ) {
      this.usuario = this.usuarioService.getUsuarioAutenticado();
    }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({revista}) => this.detalleRevistaService.obtenerVolumenesRevista(revista))
    ).subscribe( (res: RevistaVolumenM) => {this.revista = res;
    });
  }

  verArchivo(idArchivo :number){
    console.log("cargando el archivo ", idArchivo);
  }

  accionarLike(){
    console.log("Like!!");
    
  }

  mostarComentarios(){
    console.log("mostrando comentarios");
    
  }

}
