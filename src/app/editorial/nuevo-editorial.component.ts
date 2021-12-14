import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-nuevo-editorial',
  templateUrl: './nuevo-editorial.component.html',
  styleUrls: ['./nuevo-editorial.component.css']
})
export class NuevoEditorialComponent implements OnInit {

  ruc:string='';
    nombre:string='';
    descripcion:string='';
    direccion:string='';
    telefono1:string='';
    telefono2:string='';
    correoElectronico:string='';
    fechaCreacion:string='';
    estado:string='';

  constructor(

    private editorialService:EditorialService,
    private toastr:ToastrService,
    private router:Router

  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const editorial = new Editorial(this.ruc,this.nombre,this.descripcion,this.direccion,this.telefono1,this.telefono2,this.correoElectronico,this.fechaCreacion,this.estado);
    this.editorialService.save(editorial).subscribe(
      data =>{
        this.toastr.success('Editorial Creado','OK',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
        this.router.navigate(['/lista_edit']);
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

