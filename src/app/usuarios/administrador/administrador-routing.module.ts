import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaCostoPorDiaComponent } from './pages/pagina-costo-por-dia/pagina-costo-por-dia.component';
import { PaginaAnunciosComponent } from './pages/pagina-anuncios/pagina-anuncios.component';
import { PaginaReportesComponent } from './pages/pagina-reportes/pagina-reportes.component';
import { PaginaGeneralesComponent } from './pages/pagina-generales/pagina-generales.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { ListadoComponent } from './reportes/listado/listado.component';
import { GananciasRevistasComponent } from './reportes/ganancias-revistas/ganancias-revistas.component';
import { GananciasAnunciosComponent } from './reportes/ganancias-anuncios/ganancias-anuncios.component';
import { GananciasTotalesComponent } from './reportes/ganancias-totales/ganancias-totales.component';
import { PopularesComponent } from './reportes/populares/populares.component';
import { MasComentadasComponent } from './reportes/mas-comentadas/mas-comentadas.component';
import { AnunciosComponent } from './reportes/anuncios/anuncios.component';
import { EfectividadAnunciosComponent } from './reportes/efectividad-anuncios/efectividad-anuncios.component';

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
        component: PaginaReportesComponent,
        children: [
          {
            path: 'listado',
            component: ListadoComponent
          },
          {
            path: 'ganancias-revistas',
            component: GananciasRevistasComponent
          },
          {
            path: 'ganancias-anuncios',
            component: GananciasAnunciosComponent
          },
          {
            path: 'ganancias-totales',
            component: GananciasTotalesComponent
          },
          {
            path: 'populares',
            component: PopularesComponent
          },
          {
            path: 'mas-comentadas',
            component: MasComentadasComponent
          },
          {
            path: 'anuncios',
            component: AnunciosComponent
          },
          {
            path: 'efectividad-anuncios',
            component: EfectividadAnunciosComponent
          },
          {
            path: "**",
            redirectTo: 'listado'
          }
        ]
      },
      {
        path: 'generales',
        component: PaginaGeneralesComponent
      },
      {
        path: 'lista-anuncios',
        component: ListaAnunciosComponent
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
