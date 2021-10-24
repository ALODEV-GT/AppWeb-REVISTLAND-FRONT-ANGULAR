import { Component, OnInit, Sanitizer } from '@angular/core';
import { AnunciosService, TextoAnuncioM, AnuncioMostrarM } from '../../../administrador/services/anuncios.service';
import { UsuarioService } from '../../../../autenticacion/services/usuario.service';
import { UsuarioM } from '../../../../../control/autenticacion/UsuarioM';
import { AnuncioM } from 'src/control/anuncios/AnuncioM';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  usuario!: UsuarioM | undefined;
  allAnuncios!: AnuncioMostrarM[];

  anuncios: AnuncioMostrarM[] = [];


  linkPrueba: string = "https://www.youtube.com/embed/BF5R1IhsVrE";

  constructor(
    private anunciosService: AnunciosService,
    private usuarioService: UsuarioService,
    private sanitizer: DomSanitizer
  ) {
    this.usuario = this.usuarioService.getUsuarioAutenticado();
    this.anunciosService.obtenerRecomendacionesAnuncios(this.usuario?.nombre).subscribe((res: AnuncioMostrarM[]) => {
      this.allAnuncios = res;
      console.log(res);

      let tiempoEspera = 5000;
      setInterval(() => {
        this.anuncios = [];
        for (let i = 0; i < 3; i++) {
          this.anuncios.push(this.allAnuncios[this.generarNumeroAleatorio(0, this.allAnuncios.length - 1)]);
        }
      }, tiempoEspera);

    });
  }

  ngOnInit(): void {

  }

  formatearLink(link: string): any{
    console.log(link)
    const partes: string[]  = link.split("=");
    const video: string = partes[1];
    const newlink = `https://www.youtube.com/embed/${video}?loop=1&autoplay=1&playlist=${video}&controls=0&mute=1`; 
    return this.sanitizer.bypassSecurityTrustResourceUrl(newlink);
  }



  generarNumeroAleatorio(inicio: number, fin: number): number {
    return Math.floor(inicio + Math.random() * (fin - inicio + 1));
  }



}



