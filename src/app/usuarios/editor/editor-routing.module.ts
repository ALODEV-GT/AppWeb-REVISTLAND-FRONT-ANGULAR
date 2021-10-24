import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { MisRevistasComponent } from './pages/mis-revistas/mis-revistas.component';
import { AgregarVolumenComponent } from './pages/agregar-volumen/agregar-volumen.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ComentariosComponent } from './reportes/comentarios/comentarios.component';
import { SuscripcionesComponent } from './reportes/suscripciones/suscripciones.component';
import { RevistasMasGustadasComponent } from './reportes/revistas-mas-gustadas/revistas-mas-gustadas.component';
import { GananciasComponent } from './reportes/ganancias/ganancias.component';
import { ListadoComponent } from './reportes/listado/listado.component';

const rutas: Routes = [
  {
    path: "",
    component: InicioComponent,
    children: [
      {
        path: 'publicar',
        component: PublicarComponent
      },
      {
        path: 'mis-revistas',
        component: MisRevistasComponent
      },
      {
        path: 'agregar-volumen/:revista',
        component: AgregarVolumenComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        children: [
          {
            path: 'listado',
            component: ListadoComponent
          },
          {
            path: 'comentarios',
            component: ComentariosComponent
          },
          {
            path: 'suscripciones',
            component: SuscripcionesComponent
          },
          {
            path: 'revistas-mas-gustadas',
            component: RevistasMasGustadasComponent
          },
          {
            path: 'ganancias',
            component: GananciasComponent
          }
        ]
      }
    ]
  },
  {
    path: 'perfil',
    component: PerfilComponent
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
export class EditorRoutingModule { }
