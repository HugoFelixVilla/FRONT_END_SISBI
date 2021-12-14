import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  libro:Libro[]=[];
  
  roles:string[];
  isAdmin=false;
  isUser=false;
  isBibliotecario=false;

  constructor(private libroService:LibroService,
    private toastr:ToastrService,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarLibro();
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

  

  cargarLibro():void{
    this.libroService.lista().subscribe(
      data =>{
        this.libro=data;
      },
      err =>{
        console.log(err);
      } 
    );
  }


  borrar(id:any){
    // alert('borrar el '+id);
     this.libroService.delete(id).subscribe(
       data =>{
         this.toastr.success('Libro Eliminado','OK',{
           timeOut:3000,
           positionClass:'toast-top-center'
         });
         this.cargarLibro();
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
  
