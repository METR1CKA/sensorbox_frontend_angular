import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion2, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { GasService } from 'src/app/services/gas.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { interval } from 'rxjs';
@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

  gases: any[];
  contgases :any[];
  contno :any[];
  promedios:any[];
  constructor(private authService:AuthService,private router:Router,private gasService: GasService) { }

  ngOnInit(): void {
    let x = localStorage.getItem("humedad");
    console.log("x", x);
 //REGRESA TODAS LAS TEMPERATURAS
    const intervalo = interval(3000)
    intervalo.subscribe((n)=>{
      this.gasService.getgases().subscribe((res:any) => {
        console.log(res);
        this.gases = res.data;
      })

      this.gasService.getvecesgas().subscribe((resu:any)=>{
        console.log(resu);
        this.contgases =resu.data;

      })
      this.gasService.getvecesgas2().subscribe((resus:any)=>{
        console.log(resus);
        this.contno =resus.data;

      })
    })
    //REGRESA LA HUMEDADES MAS ALTA
    // this.gasService.getvecesgas2().subscribe((resus:any)=>{
    //   console.log(resus);
    //   this.contno =resus.data;
    // })
   //REGRESA EL PROMEDIO DE LAS HUMEDADESS
    // this.humedadService.gethumpromedio().subscribe((resuss:any)=>{
    //   console.log(resuss);
    //   this.promedios =resuss.data;
    // })
  }

  delete(id:string){
    this.gasService.delete(id).subscribe(
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
        [{ header: 'Gas', key: 'Gas', width: 32 },
        { header: 'Fecha', key: 'Fecha', width: 32 },
        { header: 'Hora', key: 'Hora', width: 32 },];
      this.gases.forEach(e => {
        worksheet.addRow({ id: e.id, Gas: e.Gas, Fecha: e.Fecha, Hora: e.Hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_gas.xlsx');
      })


    }
    exportExcel2() {
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('Listado');

      worksheet.columns =
        [{ header: 'valores', key: 'valores', width: 32 },
        { header: 'fecha', key: 'fecha', width: 32 },
        { header: 'hora', key: 'hora', width: 32 },];
      this.contgases.forEach(e => {
        worksheet.addRow({ id: e.id, valores: e.valores, fecha: e.fecha, hora: e.hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_gasDetallado.xlsx');
      })


    }

  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}

