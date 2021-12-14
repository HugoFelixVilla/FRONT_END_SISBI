import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoPersona } from '../models/nuevo-persona';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nuevo-persona',
  templateUrl: './nuevo-persona.component.html',
  styleUrls: ['./nuevo-persona.component.css']
})
export class NuevoPersonaComponent implements OnInit {

  nuevoPersona:NuevoPersona;
  dni:string;
    Nombre:string;
    Apellidos:string;
    Direccion:string;
    Telefono:string;
    CorreoElectronico:string;
    Clave:string;
    Estado:string;

  constructor(
    private tokenService:TokenService,
private authService:AuthService,
private router:Router,
private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }


  onCreate():void{
    this.nuevoPersona=new NuevoPersona(this.dni,this.Nombre,this.Apellidos,this.Direccion,
      this.Telefono,this.CorreoElectronico,this.Clave,this.Estado,['ROLE_USER']);
    this.authService.nuevo(this.nuevoPersona).subscribe(
      data =>{
        this.toastr.success('Cuenta Creado','OK',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
        this.router.navigate(['/lista_per']);
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
        // console.log(err.error.message);
      }
    ); 
  }
  

}
