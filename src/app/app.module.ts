import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { ListaEspecialidadComponent } from './especialidad/lista-especialidad.component';
import { DetalleEspecialidadComponent } from './especialidad/detalle-especialidad.component';
import { NuevoEspecialidadComponent } from './especialidad/nuevo-especialidad.component';
import { EditarEspecialidadComponent } from './especialidad/editar-especialidad.component';

import { interceptorProvider } from './interceptors/espe-interceptor.service';


//EXTERNAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ListaEditorialComponent } from './editorial/lista-editorial.component';
import { DetalleEditorialComponent } from './editorial/detalle-editorial.component';
import { NuevoEditorialComponent } from './editorial/nuevo-editorial.component';
import { EditarEditorialComponent } from './editorial/editar-editorial.component';
import { ListaLibroComponent } from './libro/lista-libro.component';
import { DetalleLibroComponent } from './libro/detalle-libro.component';
import { NuevoLibroComponent } from './libro/nuevo-libro.component';
import { EditarLibroComponent } from './libro/editar-libro.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaRolComponent } from './persona/lista-persona-rol.component';
import { DetallePersonaRolComponent } from './persona/detalle-persona-rol.component';
import { EditarPersonaRolComponent } from './persona/editar-persona-rol.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEspecialidadComponent,
    DetalleEspecialidadComponent,
    NuevoEspecialidadComponent,
    EditarEspecialidadComponent,
    ListaEditorialComponent,
    DetalleEditorialComponent,
    NuevoEditorialComponent,
    EditarEditorialComponent,
    ListaLibroComponent,
    DetalleLibroComponent,
    NuevoLibroComponent,
    EditarLibroComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ListaPersonaComponent,
    DetallePersonaComponent,
    NuevoPersonaComponent,
    EditarPersonaComponent,
    ListaPersonaRolComponent,
    DetallePersonaRolComponent,
    EditarPersonaRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
