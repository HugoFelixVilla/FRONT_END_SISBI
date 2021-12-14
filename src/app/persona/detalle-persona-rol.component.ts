import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolPersona } from '../models/rol-persona'; 
import { PersonaRolService } from '../service/persona-rol.service';

@Component({
  selector: 'app-detalle-persona-rol',
  templateUrl: './detalle-persona-rol.component.html',
  styleUrls: ['./detalle-persona-rol.component.css']
})
export class DetallePersonaRolComponent implements OnInit {

  rol_persona:RolPersona;
  constructor( private rol_personaService:PersonaRolService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

    

  ngOnInit(): void {const id = this.activatedRoute.snapshot.params['id'];
  this.rol_personaService.detail(id).subscribe(
    data => {
      this.rol_persona = data;
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
  this.router.navigate(['/lista_per_rol']);
}

}



