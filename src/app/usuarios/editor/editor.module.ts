import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EditorRoutingModule } from './editor-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosModule } from '../usuarios.module';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { RevistaPublicadaComponent } from './components/revista-publicada/revista-publicada.component';
import { MisRevistasComponent } from './pages/mis-revistas/mis-revistas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarVolumenComponent } from './pages/agregar-volumen/agregar-volumen.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ComentariosComponent } from './reportes/comentarios/comentarios.component';
import { SuscripcionesComponent } from './reportes/suscripciones/suscripciones.component';
import { RevistasMasGustadasComponent } from './reportes/revistas-mas-gustadas/revistas-mas-gustadas.component';
import { GananciasComponent } from './reportes/ganancias/ganancias.component';
import { ListadoComponent } from './reportes/listado/listado.component';



@NgModule({
  declarations: [
    InicioComponent,
    PublicarComponent,
    RevistaPublicadaComponent,
    MisRevistasComponent,
    AgregarVolumenComponent,
    ReportesComponent,
    ComentariosComponent,
    SuscripcionesComponent,
    RevistasMasGustadasComponent,
    GananciasComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    UsuariosModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
