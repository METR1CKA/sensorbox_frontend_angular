import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Chart} from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { TemperaturaService } from 'src/app/services/temperatura.service';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;
  temperaturas: any[];
  pieChart: any;

  constructor(private authService:AuthService,private router:Router,private temperaturaService: TemperaturaService) { }
  ngOnInit(): void {
    this.pieChartBrowser();
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }
  clickMe(){
    console.log(this.pieChartBrowser);
    }
    
  pieChartBrowser(): void {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [{
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c'
          ],
          data: [12, 19, 3, 17, 28, 24]
        }]
      }
    });
  }
}
  // constructor() { }

  // ngOnInit() {
  // }
// }