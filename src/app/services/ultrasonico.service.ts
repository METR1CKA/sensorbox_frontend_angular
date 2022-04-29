import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Ultrasonico } from '../models/ultrasonico';

@Injectable({
  providedIn: 'root'
})
export class UltrasonicoService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }

  getDistancias(): Observable<any> {
    return this.http.get(`${this.apiURL}ultrasonico`)
  }

  
  getalta():Observable<any> {
    return this.http.get(`${this.apiURL}ultraalta`)
  }

  getcercana():Observable<any> {
    return this.http.get(`${this.apiURL}ultrabaja`)
  }
  getpromedio():Observable<any> {
    return this.http.get(`${this.apiURL}promediou`)
  }
  delete(id:string){
    return this.http.delete(`${this.apiURL}ultrasonico/${id}`);
  }
}
