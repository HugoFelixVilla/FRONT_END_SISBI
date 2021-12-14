import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  editorialURL='http://localhost:8081/editorial/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Editorial[]>{
    return this.httpClient.get<Editorial[]>(this.editorialURL+'lista');
  }

  

  public detail(id:number):Observable<Editorial>{
    return this.httpClient.get<Editorial>(this.editorialURL+`datail/${id}`);
  }

  public detailName(nombre:string):Observable<Editorial>{
    return this.httpClient.get<Editorial>(this.editorialURL+`detailname/${nombre}`);
  }

  public save(especialidad:Editorial):Observable<any>{
    return this.httpClient.post<any>(this.editorialURL+'create',especialidad);
  }

  public update(id:number,especialidad:Editorial):Observable<any>{
    return this.httpClient.put<any>(this.editorialURL+`update/${id}`,especialidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.editorialURL+`delete/${id}`);
  }

}
