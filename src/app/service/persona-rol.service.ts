import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolPersona } from '../models/rol-persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRolService {

  rol_personaURL='http://localhost:8081/persona_rol/';

  constructor(private httpClient:HttpClient) {  }

  public lista():Observable<RolPersona[]>{
    return this.httpClient.get<RolPersona[]>(this.rol_personaURL+'lista');
  }

  public detail(id:number):Observable<RolPersona>{
    return this.httpClient.get<RolPersona>(this.rol_personaURL+`datail/${id}`);
  }

  public update(id:number,rolPersona:RolPersona):Observable<any>{
    return this.httpClient.put<any>(this.rol_personaURL+`update/${id}`,rolPersona);
  }

}
