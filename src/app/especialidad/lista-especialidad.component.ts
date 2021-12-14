import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from '../models/especialidad';
import { EspecialidadService } from '../service/especialidad.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-especialidad',
  templateUrl: './lista-especialidad.component.html',
  styleUrls: ['./lista-especialidad.component.css']
})
export class ListaEspecialidadComponent implements OnInit {

  especialidad:Especialidad[]=[];
  roles:string[];
  isAdmin=false;
  isUser=false;
  isBibliotecario=false;

  constructor(private especialidadoService:EspecialidadService,
    private toastr:ToastrService,
    private tokenService:TokenService
    
    ) { }

  ngOnInit(): void {
    this.cargarEspecialidad();
    this.roles=this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if(rol ==='ROLE_ADMIN'){
        this.isAdmin=true;
        this.isBibliotecario=false;
        this.isUser=false;
      }

      if(rol ==='ROLE_USER'){
        this.isAdmin=false;
        this.isBibliotecario=false;
        this.isUser=true;
      }

      if(rol ==='ROLE_BIBLIOTECARIO'){
        this.isAdmin=false;
        this.isBibliotecario=true;
        this.isUser=false;
      }
    })
  }


  cargarEspecialidad():void{
    this.especialidadoService.lista().subscribe(
      data =>{
        this.especialidad=data;
      },
      err =>{
        console.log(err);
      } 
    );
  }

  borrar(id:any){
    // alert('borrar el '+id);
     this.especialidadoService.delete(id).subscribe(
       data =>{
         this.toastr.success('Especialidad Eliminado','OK',{
           timeOut:3000,
           positionClass:'toast-top-center'
         });
         this.cargarEspecialidad();
       },
 
       err =>{
         this.toastr.error(err.error.mensaje,'Fail',{
           timeOut:3000,
           positionClass:'toast-top-center'
         });
       }
 
       )
  }
  

}
