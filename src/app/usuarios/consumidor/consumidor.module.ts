import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumidorRoutingModule } from './consumidor-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosModule } from '../usuarios.module';
import { TarjetaRevistaComponent } from './components/tarjeta-revista/tarjeta-revista.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { DescRevistaComponent } from './pages/desc-revista/desc-revista.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    TarjetaRevistaComponent,
    RecomendacionesComponent,
    DescRevistaComponent,
    CompraComponent,
  ],
  imports: [
    CommonModule,
    ConsumidorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    UsuariosModule,
    ReactiveFormsModule
  ],
  exports: [
    PerfilComponent
  ]
})
export class ConsumidorModule { }
