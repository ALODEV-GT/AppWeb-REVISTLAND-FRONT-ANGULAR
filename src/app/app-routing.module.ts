import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const rutas: Routes = [
  {
    //LazyLoad
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then(
      m => m.AutenticacionModule
    )
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuarios/consumidor/consumidor.module').then(
      m => m.ConsumidorModule
    )
  },
  {
    path: 'editor',
    loadChildren: () => import('./usuarios/editor/editor.module').then(
      m => m.EditorModule
    )
  },
  {
    path: "administrador",
    loadChildren: () => import('./usuarios/administrador/administrador.module').then(
      m => m.AdministradorModule
    )
  },
  {
    path: '404', //Pagina de error
    component: ErrorPageComponent //Componente relacionado con el path.
  },
  {
    path: '**', //Cualquier otra pagina que no existe.
    redirectTo: '404'
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
