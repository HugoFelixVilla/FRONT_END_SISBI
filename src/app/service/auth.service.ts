import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoPersona } from '../models/nuevo-persona';
import { HttpClient } from '@angular/common/http';
import { LoginPersona } from '../models/login-persona';
import { JwtDTO } from '../models/jwt-dto';
import { personaDto } from '../models/personaDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8081/auth/'

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoPersona:NuevoPersona):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo',nuevoPersona);
  }

  public login(loginPersona:LoginPersona):Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authURL + 'login',loginPersona);
  }


  public lista():Observable<NuevoPersona[]>{
    return this.httpClient.get<NuevoPersona[]>(this.authURL+'lista');
  }

  
  public detail(id:number):Observable<NuevoPersona>{
    return this.httpClient.get<NuevoPersona>(this.authURL+`datail/${id}`);
  }

  public update(id:number,personaDto:personaDto):Observable<any>{
    return this.httpClient.put<any>(this.authURL+`update/${id}`,personaDto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.authURL+`delete/${id}`);
  }


}
