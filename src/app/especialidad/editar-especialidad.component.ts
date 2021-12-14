import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from '../models/especialidad';
import { EspecialidadService } from '../service/especialidad.service';

@Component({
  selector: 'app-editar-especialidad',
  templateUrl: './editar-especialidad.component.html',
  styleUrls: ['./editar-especialidad.component.css']
})
export class EditarEspecialidadComponent implements OnInit {
  especialidad: Especialidad = null;
  constructor(
    private especialidadService: EspecialidadService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    // alert(id);
    this.especialidadService.detail(id).subscribe(
      data =>{
        this.especialidad =data;

      },

      err => {
        
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
       // this.router.navigate(['/']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.especialidadService.update(id, this.especialidad).subscribe(
      data => {
        this.toastr.success('Especialidad Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista_espe']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
     //   this.router.navigate(['/']);
      }
    );
  }

}
