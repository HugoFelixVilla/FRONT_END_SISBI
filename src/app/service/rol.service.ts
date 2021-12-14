import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  rol_URL='http://localhost:8081/rol/';


  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Rol[]>{
    return this.httpClient.get<Rol[]>(this.rol_URL+'lista');
  }
}
