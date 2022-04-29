import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Precensia } from '../models/precensia';

@Injectable({
  providedIn: 'root'
})
export class PrecensiaService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get(`${this.apiURL}presencia`)
  }
  getDia(): Observable<any> {
    return this.http.get(`${this.apiURL}detallesPresencias`)
  }

  
  // getpc():Observable<any> {
  //   return this.http.get(`${this.apiURL}precerca`)
  // }

  getCant():Observable<any> {
    return this.http.get(`${this.apiURL}cantidadPresencias`)
  }
  // getpromedio():Observable<any> {
  //   return this.http.get(`${this.apiURL}promediop`)
  // }

  createMarca(precensia: Precensia): Observable<any> {
    return this.http.post(`${this.apiURL}presensia`, precensia)
  }
  delete(id:string){
    return this.http.delete(`${this.apiURL}presencia/${id}`);
  }
  // update(precensia: Precensia){ 
  //   console.log(temperatura);
    
  //   return this.http.patch(`${this.apiURL}temperatura/${temperatura.id}`, {valor:temperatura.valor});
  //  }

  getMarca(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}precensia/${id}`)
  }
}
