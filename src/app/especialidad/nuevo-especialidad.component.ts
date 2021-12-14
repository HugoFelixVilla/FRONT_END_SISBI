import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from '../models/especialidad';
import { EspecialidadService } from '../service/especialidad.service';

@Component({
  selector: 'app-nuevo-especialidad',
  templateUrl: './nuevo-especialidad.component.html',
  styleUrls: ['./nuevo-especialidad.component.css']
})
export class NuevoEspecialidadComponent implements OnInit {

  nombre:string='';
  descripcion: string='';
  estado: string='';
   

  constructor(
    private EspecialidadService:EspecialidadService,
    private toastr:ToastrService,
    private router:Router


  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const especialidad = new Especialidad(this.nombre,this.descripcion,this.estado);
    this.EspecialidadService.save(especialidad).subscribe(
      data =>{
        this.toastr.success('Especialidad Creado','OK',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
        this.router.navigate(['/lista_espe']);
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

