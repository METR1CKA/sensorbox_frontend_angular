import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GasService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  getgases(): Observable<any> {
    return this.http.get(`${this.apiURL}gas`)
  }

  
  getvecesgas():Observable<any> {
    return this.http.get(`${this.apiURL}last`)
  }

  getvecesgas2():Observable<any> {
    return this.http.get(`${this.apiURL}cantidadgas`)
  }
  // gethumpromedio():Observable<any> {
  //   return this.http.get(`${this.apiURL}promedioh`)
  // }

  // create(humedad: Humedad): Observable<any> {
  //   return this.http.post(`${this.apiURL}humedad`, humedad)
  // }
  delete(id:string){
    return this.http.delete(`${this.apiURL}gas/${id}`);
  }
  // update(humedad:Humedad){ 
  //   console.log(humedad);
    
  //   return this.http.patch(`${this.apiURL}humedad/${humedad.id}`, {valor:humedad.valor});
  //  }

  gethumedad(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}gas/${id}`)
  }
}

