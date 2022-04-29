import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HumoService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  gethumos(): Observable<any> {
    return this.http.get(`${this.apiURL}gas`)
  }
  getvecesgas():Observable<any> {
    return this.http.get(`${this.apiURL}last`)
  }
  
  getvecesh():Observable<any> {
    return this.http.get(`${this.apiURL}vecesh`)
  }

  getvecesg():Observable<any> {
    return this.http.get(`${this.apiURL}vecesg`)
  }
  // gethumpromedio():Observable<any> {
  //   return this.http.get(`${this.apiURL}promedioh`)
  // }

  // create(humedad: Humedad): Observable<any> {
  //   return this.http.post(`${this.apiURL}humedad`, humedad)
  // }
  delete(id:string){
    return this.http.delete(`${this.apiURL}humo/${id}`);
  }
  // update(humedad:Humedad){ 
  //   console.log(humedad);
    
  //   return this.http.patch(`${this.apiURL}humedad/${humedad.id}`, {valor:humedad.valor});
  //
}