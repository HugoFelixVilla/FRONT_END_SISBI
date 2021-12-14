import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { DetalleEditorialComponent } from './editorial/detalle-editorial.component';
import { EditarEditorialComponent } from './editorial/editar-editorial.component';
import { ListaEditorialComponent } from './editorial/lista-editorial.component';
import { NuevoEditorialComponent } from './editorial/nuevo-editorial.component';
import { DetalleEspecialidadComponent } from './especialidad/detalle-especialidad.component';
import { EditarEspecialidadComponent } from './especialidad/editar-especialidad.component';
import { ListaEspecialidadComponent } from './especialidad/lista-especialidad.component';
import { NuevoEspecialidadComponent  } from './especialidad/nuevo-especialidad.component';
import { EspeGuardService as guard } from './guards/espe-guard.service';
import { IndexComponent } from './index/index.component';
import { DetalleLibroComponent } from './libro/detalle-libro.component';
import { EditarLibroComponent } from './libro/editar-libro.component';
import { ListaLibroComponent } from './libro/lista-libro.component';
import { NuevoLibroComponent } from './libro/nuevo-libro.component'; 
import { DetallePersonaRolComponent } from './persona/detalle-persona-rol.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { EditarPersonaRolComponent } from './persona/editar-persona-rol.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaRolComponent } from './persona/lista-persona-rol.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';
 

const routes: Routes = [
{path:'',component:IndexComponent},
{path:'login',component:LoginComponent},
{path:'registro',component:RegistroComponent},


{path:'lista_lib',component:ListaLibroComponent,canActivate:[guard],data:{expectedRol:['ROLE_USER','ROLE_BIBLIOTECARIO']}},
{path:'detalle_lib/:id',component:DetalleLibroComponent,canActivate:[guard],data:{expectedRol:['ROLE_USER','ROLE_BIBLIOTECARIO']}},
{path:'nuevo_lib',component:NuevoLibroComponent,canActivate:[guard],data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
{path:'editar_lib/:id',component:EditarLibroComponent,canActivate:[guard],data:{expectedRol:['ROLE_BIBLIOTECARIO']}},


  {path:'lista_edit',component:ListaEditorialComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'detalle_edit/:id',component:DetalleEditorialComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'nuevo_edit',component:NuevoEditorialComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'editar_edit/:id',component:EditarEditorialComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},

   {path:'lista_espe',component:ListaEspecialidadComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'detalle_espe/:id',component:DetalleEspecialidadComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'nuevo_espe',component:NuevoEspecialidadComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}},
  {path:'editar_espe/:id',component:EditarEspecialidadComponent,data:{expectedRol:['ROLE_BIBLIOTECARIO']}}, 

  {path:'lista_per',component:ListaPersonaComponent,data:{expectedRol:['ROLE_ADMIN']}},
  {path:'detalle_per/:id',component:DetallePersonaComponent,data:{expectedRol:['ROLE_ADMIN']}},
  {path:'nuevo_per',component:NuevoPersonaComponent,data:{expectedRol:['ROLE_ADMIN']}},
  {path:'editar_per/:id',component:EditarPersonaComponent,data:{expectedRol:['ROLE_ADMIN']}},

  {path:'lista_per_rol',component:ListaPersonaRolComponent,data:{expectedRol:['ROLE_ADMIN']}},
  {path:'detalle_per_rol/:id',component:DetallePersonaRolComponent,data:{expectedRol:['ROLE_ADMIN']}}, 
  {path:'editar_per_rol/:id',component:EditarPersonaRolComponent,data:{expectedRol:['ROLE_ADMIN']}}
  
  //CARGA LA RAIZ
 //{path:'**',redirectTo:'',pathMatch:'full'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
