import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { timeMessage, timeMessage3 } from 'src/app/functions/alerts';
import { Otro } from 'src/app/models/otro';
import { AuthService } from 'src/app/services/auth.service';
import { Response } from 'src/app/models/response.interface';
import { Location } from '@angular/common';
import { Roles } from 'src/app/models/roles';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
 
  Users :any[];
  UserForm: FormGroup;
  id: number;
  otro: Otro;
  rolotro:Roles[];

  constructor(private authService:AuthService, private router: Router, private location: Location, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.getMarca()
    });
    this.UserForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]), 
      status: new FormControl(null, [Validators.required]) ,
      rolid: new FormControl(null, [Validators.required]) 
    })
    this.authService.getRoles().subscribe((res:any) => {
      console.log(res);
      
      this.rolotro = res.data;
    })
  }

  getMarca() {
    this.authService.getUser(this.id).subscribe((res: Response<Otro>) => {
      this.otro = res.data
      this.UserForm.get("username").setValue(this.otro.username);
      this.UserForm.get("email").setValue(this.otro.email);
      this.UserForm.get("password").setValue(this.otro.password);
      this.UserForm.get("status").setValue(this.otro.status);
      this.UserForm.get("rolid").setValue(this.otro.rolid);
      console.log("Otro", this.otro);
    })
  }

  guardar(): void {
    let data: Otro = {
      id: this.id,
      username:this.UserForm.get('username').value,
      email: this.UserForm.get('email').value,
      password: this.UserForm.get('password').value,
      status: this.UserForm.get('status').value,
      rolid: this.UserForm.get('rolid').value
    };
    
    this.authService.update(data).subscribe((res: Response<Otro>) => {
      console.log("Usuario Actualizado", res.data);
      // this.router.navigate['/marcas']
      timeMessage("Registrando...",5);
      this.router.navigate(['/usuarios']);
      this.location.back()
    })
  }
  

  editar(otro:Otro)
  {
     localStorage.setItem("id",otro.id.toString());
     timeMessage("Registrando...",5);
   }

   logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}
