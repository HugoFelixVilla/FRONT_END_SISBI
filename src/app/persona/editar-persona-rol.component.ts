import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from '../models/rol';
import { RolPersona } from '../models/rol-persona'; 
import { PersonaRolService } from '../service/persona-rol.service';
import { RolService } from '../service/rol.service';

@Component({
  selector: 'app-editar-persona-rol',
  templateUrl: './editar-persona-rol.component.html',
  styleUrls: ['./editar-persona-rol.component.css']
})
export class EditarPersonaRolComponent implements OnInit {

  rol_persona:RolPersona = null;
  lstRoles:Rol[]=[];
  constructor(
    private rol_personaService:PersonaRolService,
    private rolService:RolService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.rolService.lista().subscribe(rol =>{
      this.lstRoles=rol;
    })

    const id = this.activatedRoute.snapshot.params['id'];
    // alert(id);
    this.rol_personaService.detail(id).subscribe(
      data =>{
        this.rol_persona =data;

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
    this.rol_personaService.update(id, this.rol_persona).subscribe(
      data => {
        this.toastr.success('Rol de la Cuenta Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista_per_rol']);
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
