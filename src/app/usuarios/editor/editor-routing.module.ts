import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { MisRevistasComponent } from './pages/mis-revistas/mis-revistas.component';
import { AgregarVolumenComponent } from './pages/agregar-volumen/agregar-volumen.component';

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
