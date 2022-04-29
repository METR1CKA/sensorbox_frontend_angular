import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from 'src/app/models/user';
import { User2 } from 'src/app/models/user2';
import { Otro } from '../models/otro';
import { Roles } from '../models/roles';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL=environment.apiURL;
  isLoggedIn: boolean = false;

  constructor(private http:HttpClient) { }
  // ROLES
  getRoles(): Observable<any> {
    return this.http.get(`${this.apiURL}rol`)
  }
  getOtro(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}rol/${id}`)
  }
  
  updateRol(rol:Roles){ 
    console.log(rol);
    
    return this.http.patch(`${this.apiURL}rol/${rol.id}`, 
    {rol:rol.rol});
   }
  
  createRol(rol: Roles): Observable<any> {
    return this.http.post(`${this.apiURL}rol`, rol)
  }

  deleteRol(id:string){
    return this.http.delete(`${this.apiURL}rol/${id}`);
  }
  //usuarios
 createUser(user2: User2): Observable<any> {
    return this.http.post(`${this.apiURL}users`, user2)
  }

  getUser(id:number): Observable<any> {
    return this.http.get(`${this.apiURL}users/${id}`)
  }
  deleteUser(id:string){
    return this.http.delete(`${this.apiURL}users/${id}`);
  }
  //Actualizar Usuario
  update(otro:Otro){ 
    console.log(otro);
    
    return this.http.patch(`${this.apiURL}users/${otro.id}`, 
    {username:otro.username,email:otro.email, password:otro.password,status:otro.status,rolid:otro.rolid});
   }
  register(user2:User2):Observable<any>{
    return this.http.post(`${this.apiURL}users`,user2)
  }
  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user)
  }
  equipo(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}equipo`,user)
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiURL}users`)
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getEmail():any  {
    return localStorage.getItem('email');
  }
  getUsername():string  {
    return localStorage.getItem('username');
  }
  saveSession(token: string, rol: any,email:any) {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    localStorage.setItem('token', token);
    localStorage.setItem("rol", rol);
    localStorage.setItem("email",email);
    // localStorage.setItem("username",username);
  }

  removeSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('email');
    // localStorage.removeItem('username');
  }

  isAuth(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return of(this.isLoggedIn);
  }

  getRol(): string {
    return localStorage.getItem("rol")
  }
}
