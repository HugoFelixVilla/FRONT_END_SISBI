import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from '../models/especialidad';
import { EspecialidadService } from '../service/especialidad.service';

@Component({
  selector: 'app-detalle-especialidad',
  templateUrl: './detalle-especialidad.component.html',
  styleUrls: ['./detalle-especialidad.component.css']
})
export class DetalleEspecialidadComponent implements OnInit {

  especialidad: Especialidad = null;
  constructor(
    private especialidadService: EspecialidadService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  ngOnInit(): void { const id = this.activatedRoute.snapshot.params['id'];
  this.especialidadService.detail(id).subscribe(
    data => {
      this.especialidad = data;
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.volver();
    }
  );
  
}

volver(): void {
  this.router.navigate(['/lista_espe']);
}


}
