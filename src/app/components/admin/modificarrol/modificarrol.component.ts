import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { timeMessage, timeMessage3 } from 'src/app/functions/alerts';
import { Roles } from 'src/app/models/roles';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { Response } from 'src/app/models/response.interface';
@Component({
  selector: 'app-modificarrol',
  templateUrl: './modificarrol.component.html',
  styleUrls: ['./modificarrol.component.css']
})
export class ModificarrolComponent implements OnInit {
 

  constructor(private authService:AuthService, private router: Router, private location: Location, private activateRoute: ActivatedRoute) { }
  RolForm: FormGroup;
  id: number;
  Rol: Roles

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.getMarca()
    });
    this.RolForm = new FormGroup({
      rol: new FormControl(null, [Validators.required]),
     
    })
  }

  getMarca() {
    this.authService.getOtro(this.id).subscribe((res: Response<Roles>) => {
      this.Rol = res.data
      this.RolForm.get("rol").setValue(this.Rol.rol);
      
      console.log("Rol", this.Rol);
    })
  }

  guardar(): void {
    let data: Roles = {
      id: this.id,
      rol: this.RolForm.get('rol').value
    };
    
    this.authService.updateRol(data).subscribe((res: Response<Roles>) => {
      console.log("Rol Actualizado", res.data);
      // this.router.navigate['/marcas']
      timeMessage("Registrando...",5);
      this.router.navigate(['/admin']);
      this.location.back()
    })
  }
  

  editar(Rol:Roles)
  {
     localStorage.setItem("id",Rol.id.toString());
     timeMessage("Registrando...",5);
   }

   logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }
}