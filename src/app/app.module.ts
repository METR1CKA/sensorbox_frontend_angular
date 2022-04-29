import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/auth/main/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Home2Component } from './components/main2/home2/home2.component';



import { HumedadComponent } from './components/sensores/humedad/humedad.component';
import { TemperaturaComponent } from './components/sensores/temperatura/temperatura.component';
import { GasComponent } from './components/sensores/gas/gas.component';
import { HumoComponent } from './components/sensores/humo/humo.component';
import { UltrasonicoComponent } from './components/sensores/ultrasonico/ultrasonico.component';
import { PrecensiaComponent } from './components/sensores/precensia/precensia.component';
import { VistasComponent } from './components/vistas/vistas.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreadoresComponent } from './components/creadores/creadores.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MovilComponent } from './components/movil/movil.component';
import { ModificarComponent } from './components/usuarios/modificar/modificar.component';
import { ModificarrolComponent } from './components/admin/modificarrol/modificarrol.component';
import { CrearComponent } from './components/sensores/crear/crear.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import {NgChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
     Home2Component, 
     HumedadComponent, 
     TemperaturaComponent, 
     GasComponent, 
     HumoComponent, 
     UltrasonicoComponent, 
     PrecensiaComponent, 
     VistasComponent, 
     AdminComponent, 
     CreadoresComponent, 
     UsuariosComponent, 
     MovilComponent, 
     ModificarComponent, 
     ModificarrolComponent, 
     CrearComponent, GraficasComponent, LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
