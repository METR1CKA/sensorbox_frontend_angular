import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/auth/main/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { Home2Component } from './components/main2/home2/home2.component';

import { GuardsGuard } from './Guards/guards.guard';
import { ClienteguardGuard } from './Guards/clienteguard.guard';
import { AdminguardGuard } from './Guards/adminguard.guard';

import { TemperaturaComponent } from './components/sensores/temperatura/temperatura.component';

import { PrecensiaComponent } from './components/sensores/precensia/precensia.component';
import { CreadoresComponent } from './components/creadores/creadores.component';

import { UltrasonicoComponent } from './components/sensores/ultrasonico/ultrasonico.component';
import { HumedadComponent } from './components/sensores/humedad/humedad.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MovilComponent } from './components/movil/movil.component';
import { ModificarComponent } from './components/usuarios/modificar/modificar.component';
import { VistasComponent } from './components/vistas/vistas.component';
import { AdminComponent } from './components/admin/admin.component';
import { CrearComponent } from './components/sensores/crear/crear.component';
import { VisitanteGuard } from './Guards/visitante.guard';
import { ModificarrolComponent } from './components/admin/modificarrol/modificarrol.component';
import { GasComponent } from './components/sensores/gas/gas.component';
import { HumoComponent } from './components/sensores/humo/humo.component';
import { GraficasComponent } from './components/graficas/graficas.component';

const routes: Routes = [
  //Visitante
  {path:'homevisitante',component:VistasComponent,canActivate: [GuardsGuard,VisitanteGuard]},


//PRINCIPAL REGISTRAR Y LOGUEARSE
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},


// AMDINISTRADOR
{path:'home',component:HomeComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'admin',component:AdminComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'usuarios/Modificar/:id',component:ModificarComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'admin/Modificar/:id',component:ModificarrolComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'usuarios',component:UsuariosComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'creadores',component:CreadoresComponent,canActivate:[GuardsGuard,AdminguardGuard]},
{path:'crear',component:CrearComponent,canActivate:[GuardsGuard,AdminguardGuard]},



//CLIENTE
{path:'home2',component:Home2Component ,canActivate: [GuardsGuard,ClienteguardGuard] },
{path:'movil',component:MovilComponent,canActivate: [GuardsGuard,ClienteguardGuard]},

  //SENSORES
  {path:'temperatura',component:TemperaturaComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'precensia',component:PrecensiaComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'humedad',component:HumedadComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'ultrasonico',component:UltrasonicoComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'gas',component:GasComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'humo',component:HumoComponent,canActivate: [GuardsGuard,ClienteguardGuard]},
  {path:'graficas',component:GraficasComponent},

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
