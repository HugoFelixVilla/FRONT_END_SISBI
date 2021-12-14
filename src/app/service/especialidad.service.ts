import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from '../models/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  especialidadURL='http://localhost:8081/especialidad/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Especialidad[]>{
    return this.httpClient.get<Especialidad[]>(this.especialidadURL+'lista');
  }

  public detail(id:number):Observable<Especialidad>{
    return this.httpClient.get<Especialidad>(this.especialidadURL+`datail/${id}`);
  }

  public detailName(nombre:string):Observable<Especialidad>{
    return this.httpClient.get<Especialidad>(this.especialidadURL+`detailname/${nombre}`);
  }

  public save(especialidad:Especialidad):Observable<any>{
    return this.httpClient.post<any>(this.especialidadURL+'create',especialidad);
  }

  public update(id:number,especialidad:Especialidad):Observable<any>{
    return this.httpClient.put<any>(this.especialidadURL+`update/${id}`,especialidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.especialidadURL+`delete/${id}`);
  }

}
