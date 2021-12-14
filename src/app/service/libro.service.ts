import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroURL='http://localhost:8081/libro/';

  constructor(private httpClient:HttpClient) { }
  public lista():Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.libroURL+'lista');
  }

  public detail(id:number):Observable<Libro>{
    return this.httpClient.get<Libro>(this.libroURL+`datail/${id}`);
  }

  public detailName(nombre:string):Observable<Libro>{
    return this.httpClient.get<Libro>(this.libroURL+`detailname/${nombre}`);
  }

  public save(especialidad:Libro):Observable<any>{
    return this.httpClient.post<any>(this.libroURL+'create',especialidad);
  }

  public update(id:number,especialidad:Libro):Observable<any>{
    return this.httpClient.put<any>(this.libroURL+`update/${id}`,especialidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.libroURL+`delete/${id}`);
  }

}

