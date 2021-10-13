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



@NgModule({
  declarations: [
    InicioComponent,
    PublicarComponent,
    RevistaPublicadaComponent,
    MisRevistasComponent
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
