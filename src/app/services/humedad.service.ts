import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Humedad } from '../models/humedad';
@Injectable({
  providedIn: 'root'
})
export class HumedadService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  getHumedades(): Observable<any> {
    return this.http.get(`${this.apiURL}humedad`)
  }

  
  gethumbaja():Observable<any> {
    return this.http.get(`${this.apiURL}humbaja`)
  }

  gethumalta():Observable<any> {
    return this.http.get(`${this.apiURL}humalta`)
  }
  gethumpromedio():Observable<any> {
    return this.http.get(`${this.apiURL}promedioh`)
  }

  create(humedad: Humedad): Observable<any> {
    return this.http.post(`${this.apiURL}humedad`, humedad)
  }
  delete(id:string){
    return this.http.delete(`${this.apiURL}humedad/${id}`);
  }
  // update(humedad:Humedad){ 
  //   console.log(humedad);
    
  //   return this.http.patch(`${this.apiURL}humedad/${humedad.id}`, {Temperatura:humedad.Temperatura,Fecha:humedad:fecha,Hora:humedad.hora});
  //  }

  gethumedad(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}humedad/${id}`)
  }
}
