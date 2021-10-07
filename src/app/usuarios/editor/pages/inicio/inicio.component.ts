import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mostrarNavBar: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!this.router.url.includes('perfil')) {
      this.mostrarNavBar=false;
    }
  }

}
