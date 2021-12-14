import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { EditorialService } from '../service/editorial.service'; 

@Component({
  selector: 'app-lista-editorial',
  templateUrl: './lista-editorial.component.html',
  styleUrls: ['./lista-editorial.component.css']
})
export class ListaEditorialComponent implements OnInit {
  editorial:Editorial[]=[];  

  constructor(private editorialService:EditorialService,
    private toastr:ToastrService) { }

  
  ngOnInit(): void {
    this.cargarEditorial();

  }


  cargarEditorial():void{
    this.editorialService.lista().subscribe(
      data =>{
        this.editorial=data;
      },
      err =>{
        console.log(err);
      } 
    );
  }


  borrar(id:any){
    // alert('borrar el '+id);
     this.editorialService.delete(id).subscribe(
       data =>{
         this.toastr.success('Editorial Eliminado','OK',{
           timeOut:3000,
           positionClass:'toast-top-center'
         });
         this.cargarEditorial();
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
