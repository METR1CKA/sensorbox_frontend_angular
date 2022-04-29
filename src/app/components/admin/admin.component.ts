import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { eliminacion, timeMessage, timeMessage3 } from 'src/app/functions/alerts';
import { Roles } from 'src/app/models/roles';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { Response } from 'src/app/models/response.interface';
import { Otro } from 'src/app/models/otro';
import { User } from 'src/app/models/user';
import { User2 } from 'src/app/models/user2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  RolForm: FormGroup;
  roles:any[];
  Users :any[];
  UserForm: FormGroup;
  id: number;
  otro: Otro;
  rolotro:Roles[];
  constructor(private authService:AuthService,private router:Router, private location: Location) { }

  ngOnInit(): void { 
    
    this.RolForm = new FormGroup({
      rol: new FormControl(null, [Validators.required])
    })
    this.UserForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]), 
      status: new FormControl(null, [Validators.required]) ,
      rolid: new FormControl(null, [Validators.required]) 
    })
    this.authService.getRoles().subscribe((res:any) => {
      console.log(res);
      this.roles = res.data;
    })


  }
  delete(id:string){
    this.authService.deleteRol(id).subscribe(
      res=>{
        console.log(res)
        eliminacion("Saliendo...",);
        this.ngOnInit();
      },
      err=>console.error(err)
  
    )}
  guardar(): void {
    let data: Roles = {
      rol: this.RolForm.get('rol').value
    };
    
    
    this.authService.createRol(data).subscribe((res: Response<Roles>) => {
      console.log("Rol registrada", res.data);
      timeMessage("Registrando...",5);
      this.router.navigate(['/admin']);
     
      this.location.back()
    })
  } 
  guardar2(): void {
    let data: Otro = {
      id: this.id,
      username:this.UserForm.get('username').value,
      email: this.UserForm.get('email').value,
      password: this.UserForm.get('password').value,
      status: this.UserForm.get('status').value,
      rolid: this.UserForm.get('rolid').value
    };
    this.authService.createUser(data).subscribe((res: Response<User2>) => {
      console.log("Usuario registrado", res.data);
      timeMessage("Registrando...",5);
      this.router.navigate(['/admin']);
     
      this.location.back()
    })
  } 

  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }
}
