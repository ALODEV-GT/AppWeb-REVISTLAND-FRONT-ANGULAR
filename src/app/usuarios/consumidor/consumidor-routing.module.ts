import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { DescRevistaComponent } from './pages/desc-revista/desc-revista.component';
import { CompraComponent } from './pages/compra/compra.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'inicio',
        component: RecomendacionesComponent
      },
      {
        path: 'info/:revista',
        component: DescRevistaComponent
      },
      {
        path: 'compra/:revista',
        component: CompraComponent
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
export class ConsumidorRoutingModule { }
