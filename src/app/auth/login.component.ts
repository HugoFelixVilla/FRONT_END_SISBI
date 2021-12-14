import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginPersona } from '../models/login-persona';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged=false;
  isLoginFail=false;
  loginPersona:LoginPersona;
  dni:string;
  clave:string;
  roles:string[]=[];
  errMsj:string;


  constructor(
private tokenService:TokenService,
private authService:AuthService,
private router:Router,
private toastr: ToastrService


  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles=this.tokenService.getAuthorities();

    }
  }

  onLogin():void{
    this.loginPersona=new LoginPersona(this.dni,this.clave);
    this.authService.login(this.loginPersona).subscribe(
      data =>{
        this.isLogged=true;
        this.isLoginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.dni);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        this.toastr.success('Bienvenido '+ data.dni, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err =>{
        this.isLogged=false;
        this.isLoginFail=true;
       // this.errMsj=err.error.mensaje;
    //    console.log(this.errMsj);

    this.toastr.error('USUARIO NO ENCONTRADO', 'Fail', {
      timeOut: 3000,  positionClass: 'toast-top-center',
    });
      }
    ); 
  }

}
