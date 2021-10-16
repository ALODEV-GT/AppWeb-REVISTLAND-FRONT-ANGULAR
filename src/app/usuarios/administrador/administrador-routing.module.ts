import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaCostoPorDiaComponent } from './pages/pagina-costo-por-dia/pagina-costo-por-dia.component';
import { PaginaAnunciosComponent } from './pages/pagina-anuncios/pagina-anuncios.component';
import { PaginaReportesComponent } from './pages/pagina-reportes/pagina-reportes.component';
import { PaginaGeneralesComponent } from './pages/pagina-generales/pagina-generales.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'costo',
        component: PaginaCostoPorDiaComponent
      },
      {
        path: 'anuncios',
        component: PaginaAnunciosComponent
      },
      {
        path: 'reportes',
        component: PaginaReportesComponent
      },
      {
        path: 'generales',
        component: PaginaGeneralesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministradorRoutingModule { }
