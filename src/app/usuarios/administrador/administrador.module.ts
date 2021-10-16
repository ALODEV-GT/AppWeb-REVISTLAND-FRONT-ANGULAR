import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaAnunciosComponent } from './pages/pagina-anuncios/pagina-anuncios.component';
import { PaginaReportesComponent } from './pages/pagina-reportes/pagina-reportes.component';
import { PaginaGeneralesComponent } from './pages/pagina-generales/pagina-generales.component';
import { PaginaCostoPorDiaComponent } from './pages/pagina-costo-por-dia/pagina-costo-por-dia.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    PaginaAnunciosComponent,
    PaginaReportesComponent,
    PaginaGeneralesComponent,
    PaginaCostoPorDiaComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
