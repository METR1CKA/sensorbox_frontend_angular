import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {FormGroup}from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog,timeMessage } from 'src/app/functions/alerts';
import {User } from 'src/app/models/user';
import { User2 } from 'src/app/models/user2';
import { AuthService } from 'src/app/services/auth.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  
  registerFrom: FormGroup;
  user2:User2;
 
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) {
    this.createFrom();
   }

  ngOnInit(): void {
  }

  register():void{
    
   if(this.registerFrom.invalid){
     return Object.values(this.registerFrom.controls).forEach(control =>{
       control.markAsTouched();
     });
    }else{
       this.setUser();
       this.authService.register(this.user2).subscribe((data:any)=>{
         
        timeMessage("Registrando...",1500);
        this.router.navigate(['/login']);
      }, error=>{ 
      errorMessage('El email ya esta registrado')
       
     });
   }
  }

  createFrom():void
  {
    this.registerFrom =this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]]
    });
  }
  get emailValidate(){
    return(
      this.registerFrom.get('email').invalid && this.registerFrom.get('email').touched
      );
  }

  get passwordValidate(){
     return(
       this.registerFrom.get('password').invalid && this.registerFrom.get('password').touched
       );
  }
  get password2Validate(){
    const pass=this.registerFrom.get('password').value;
    const pass2=this.registerFrom.get('password2').value;
    return pass === pass2 ? false : true;
  }
  setUser():void{
    this.user2=
    {
      username:this.registerFrom.get('username').value,
      email:this.registerFrom.get('email').value,
      password: this.registerFrom.get('password').value,
    
    };
  }
}
