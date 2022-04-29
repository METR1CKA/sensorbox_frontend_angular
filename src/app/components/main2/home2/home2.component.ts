import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
usuario:any[];
otros:any[]
  constructor(private authService:AuthService,private router:Router) { }
  
  ngOnInit(): void { 
    const usuario =localStorage["email"];
    // h1.textContent = 'Bienvenido, ' + usuario;
    console.log( usuario);
    // this.ver = usuario.data;
    // this.humos = res.data;
  }
  

    
 
  
  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}

