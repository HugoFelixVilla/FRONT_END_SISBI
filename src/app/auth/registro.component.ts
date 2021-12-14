import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import { NuevoPersona } from '../models/nuevo-persona';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  nuevoPersona:NuevoPersona;
  dni:string;
    Nombre:string;
    Apellidos:string;
    Direccion:string;
    Telefono:string;
    CorreoElectronico:string;
    Clave:string;
    Estado:string='ACTIVO';
  

 
  errMsj:string;
  isLogged=false;

  constructor(
    private tokenService:TokenService,
private authService:AuthService,
private router:Router,
private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true; 
     
  }
 
}

onRegister():void{
  this.nuevoPersona=new NuevoPersona(this.dni,this.Nombre,this.Apellidos,this.Direccion,
    this.Telefono,this.CorreoElectronico,this.Clave,'ACTIVO',['ROLE_USER']);
  this.authService.nuevo(this.nuevoPersona).subscribe(
    data =>{
      this.toastr.success('Cuenta Creada', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });

      this.router.navigate(['/login']);
    },
    err =>{
      this.errMsj = err.error.mensaje;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      // console.log(err.error.message);
    }
  ); 
}

}
