import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RolPersona } from '../models/rol-persona'; 
import { PersonaRolService } from '../service/persona-rol.service';

@Component({
  selector: 'app-lista-persona-rol',
  templateUrl: './lista-persona-rol.component.html',
  styleUrls: ['./lista-persona-rol.component.css']
})
export class ListaPersonaRolComponent implements OnInit {

  rol_persona:RolPersona[]=[];

  constructor(private rol_personaService:PersonaRolService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.cargarPersonaRol();
  }

  cargarPersonaRol():void{
    this.rol_personaService.lista().subscribe(
      data =>{
        this.rol_persona=data;
      },
      err =>{
        console.log(err);
      } 
    );
  }


}
