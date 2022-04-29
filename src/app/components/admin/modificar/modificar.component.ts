import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { timeMessage } from 'src/app/functions/alerts';
import { Roles } from 'src/app/models/roles';
import { Location } from '@angular/common';
import { Response } from 'src/app/models/response.interface';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  RolForm: FormGroup;
  id: number;
  rol: Roles

  constructor(private authService:AuthService, private router: Router, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.getMarca()
    });
    this.RolForm = new FormGroup({
      rol: new FormControl(null, [Validators.required])
    })
  }

  getMarca() {
    this.authService.getOtro(this.id).subscribe((res: Response<Roles>) => {
      this.rol = res.data
      this.RolForm.get("rol").setValue(this.rol.rol);
      console.log("Rol:", this.rol);
    })
  }

  guardar(): void {
    let data: Roles = {
      id: this.id,
      rol: this.RolForm.get('rol').value    };
    
    this.authService.updateRol(data).subscribe((res: Response<Roles>) => {
      console.log("Rol Actualizado", res.data);
      // this.router.navigate['/marcas']
      timeMessage("Registrando...",5);
      this.router.navigate(['/admin']);
      this.location.back()
    })
  }




}
