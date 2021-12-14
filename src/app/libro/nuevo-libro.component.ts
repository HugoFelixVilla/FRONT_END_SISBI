import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { Especialidad } from '../models/especialidad';
import { Libro } from '../models/libro';
import { EditorialService } from '../service/editorial.service';
import { EspecialidadService } from '../service/especialidad.service';
import { LibroService } from '../service/libro.service';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

 
  //libro:Libro;
  lstespecialidad:Especialidad[]=[];
  lsteditorial:Editorial[]=[];

   
/* 

  editorial: {
    id_Editorial: 0;
  } 

  especialidad: {
    id_Especialidad: 0
  } */

  modalLibro:Libro={
    especialidad: {
      id_Especialidad: 0
    },
    nombre: '',
    anioPublicacion: '',
    nroPaginas: '',
    editorial: {
      id_EDITORIAL:0
    },
    estado: ''
  }
   

 /*  especialidad:Especialidad;
  editorial:Editorial;*/
  //  nombre:string='';
  //  anioPublicacion:string='';
  //  nroPaginas:string=''; 
  //  estado:string=''; 

  constructor(
    private toastr:ToastrService,
    private router:Router,
    private especialidadService:EspecialidadService,
    private editorialService:EditorialService,
    private libroService:LibroService,
   

  ) { }

  ngOnInit(): void {
     
    this.editorialService.lista().subscribe(edit =>{
      this.lsteditorial=edit;
    })

    this.especialidadService.lista().subscribe(espe =>{
      this.lstespecialidad=espe;
    })

  }
  onCreate():void{
    const libro = new Libro(this.modalLibro.nombre,this.modalLibro.anioPublicacion,this.modalLibro.nroPaginas,this.modalLibro.especialidad,this.modalLibro.editorial,this.modalLibro.estado);
    this.libroService.save(libro).subscribe(
      data =>{
        this.toastr.success('Libro Creado','OK',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
        this.router.navigate(['/lista_lib']);
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
       // this.router.navigate(['/']);
      }
    )
  }

}



