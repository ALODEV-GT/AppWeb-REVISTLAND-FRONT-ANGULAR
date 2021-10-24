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
import { TarjetaAnuncioComponent } from './components/tarjeta-anuncio/tarjeta-anuncio.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { TarjetaCostoRevistaComponent } from './components/tarjeta-costo-revista/tarjeta-costo-revista.component';
import { ListadoComponent } from './reportes/listado/listado.component';
import { GananciasRevistasComponent } from './reportes/ganancias-revistas/ganancias-revistas.component';
import { GananciasAnunciosComponent } from './reportes/ganancias-anuncios/ganancias-anuncios.component';
import { GananciasTotalesComponent } from './reportes/ganancias-totales/ganancias-totales.component';
import { PopularesComponent } from './reportes/populares/populares.component';
import { MasComentadasComponent } from './reportes/mas-comentadas/mas-comentadas.component';
import { AnunciosComponent } from './reportes/anuncios/anuncios.component';
import { EfectividadAnunciosComponent } from './reportes/efectividad-anuncios/efectividad-anuncios.component';

@NgModule({
  declarations: [
    InicioComponent,
    PaginaAnunciosComponent,
    PaginaReportesComponent,
    PaginaGeneralesComponent,
    PaginaCostoPorDiaComponent,
    TarjetaAnuncioComponent,
    ListaAnunciosComponent,
    TarjetaCostoRevistaComponent,
    ListadoComponent,
    GananciasRevistasComponent,
    GananciasAnunciosComponent,
    GananciasTotalesComponent,
    PopularesComponent,
    MasComentadasComponent,
    AnunciosComponent,
    EfectividadAnunciosComponent
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
