import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoPersona } from '../models/nuevo-persona';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  persona:NuevoPersona;
  constructor(
    private personaService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {const id = this.activatedRoute.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    data => {
      this.persona = data;
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
  this.router.navigate(['/lista_per']);
}

}
