import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NuevoPersona } from '../models/nuevo-persona';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {
  persona:NuevoPersona[]=[];
  constructor(private personaService:AuthService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(
      data =>{
        this.persona=data;
      },
      err =>{
        console.log(err);
      } 
    );
  }


  borrar(id:any){
    // alert('borrar el '+id);
     this.personaService.delete(id).subscribe(
       data =>{
         this.toastr.success('Persona Eliminado','OK',{
           timeOut:3000,
           positionClass:'toast-top-center'
         });
         this.cargarPersona();
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
