import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion2, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { HumedadService } from 'src/app/services/humedad.service';
import {Humedad} from 'src/app/models/humedad';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { interval } from 'rxjs';
@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css']
})
export class HumedadComponent implements OnInit {

  humedades: any[];
  bajas :any[];
  altas :any[];
  promedios:any[];
  constructor(private authService:AuthService,private router:Router,private humedadService: HumedadService) { }

  ngOnInit(): void {
    let x = localStorage.getItem("humedad");
    console.log("x", x);
 //REGRESA TODAS LAS TEMPERATURAS
    const intervalo = interval(3000)
    intervalo.subscribe((n)=>{
      this.humedadService.getHumedades().subscribe((res:any) => {
        console.log(res);
        this.humedades = res.data;
      })
      //REGRESA LA HUMEDADES MAS BAJA
      this.humedadService.gethumbaja().subscribe((resu:any)=>{
        console.log(resu);
        this.bajas =resu.data;
      })
      //REGRESA LA HUMEDADES MAS ALTA
      this.humedadService.gethumalta().subscribe((resus:any)=>{
        console.log(resus);
        this.altas =resus.data;
      })
     //REGRESA EL PROMEDIO DE LAS HUMEDADESS
      this.humedadService.gethumpromedio().subscribe((resuss:any)=>{
        console.log(resuss);
        this.promedios =resuss.data;
      })
    })
  }

  delete(id:string){
    this.humedadService.delete(id).subscribe(
      res=>{
        console.log(res)
        eliminacion2("Saliendo...",);
        this.ngOnInit();
      },
      err=>console.error(err)

    )}

    exportExcel() {
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('Listado');

      worksheet.columns =
        [{ header: 'Temperatura', key: 'Temperatura', width: 32 },
        { header: 'Fecha', key: 'Fecha', width: 32 },
        { header: 'Hora', key: 'Hora', width: 32 },];
      this.humedades.forEach(e => {
        worksheet.addRow({ id: e.id, Temperatura: e.Temperatura, Fecha: e.Fecha, Hora: e.Hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_Humedad.xlsx');
      })


    }

  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}
