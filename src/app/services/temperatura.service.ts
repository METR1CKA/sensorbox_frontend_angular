import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { environment } from 'src/environments/environment.prod';
import { Temperatura } from '../models/temperatura';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get(`${this.apiURL}temperatura`)
  }

  
  gettempbaja():Observable<any> {
    return this.http.get(`${this.apiURL}tempbaja`)
  }

  gettempalta():Observable<any> {
    return this.http.get(`${this.apiURL}tempalta`)
  }
  getpromedio():Observable<any> {
    return this.http.get(`${this.apiURL}promedio`)
  }

  createMarca(temperatura: Temperatura): Observable<any> {
    return this.http.post(`${this.apiURL}temperatura`, temperatura)
  }
  delete(id:string){
    return this.http.delete(`${this.apiURL}temperatura/${id}`);
  }
  update(temperatura:Temperatura){ 
    console.log(temperatura);
    
    return this.http.patch(`${this.apiURL}temperatura/${temperatura.id}`, {Temperatura:temperatura.Temperatura,Fecha:temperatura.Fecha,Hora:temperatura.Hora});
   }

  getMarca(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}temperatura/${id}`)
  }
}
