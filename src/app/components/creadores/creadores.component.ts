import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-creadores',
  templateUrl: './creadores.component.html',
  styleUrls: ['./creadores.component.css']
})
export class CreadoresComponent implements OnInit {

 
  constructor(private authService:AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }
}
