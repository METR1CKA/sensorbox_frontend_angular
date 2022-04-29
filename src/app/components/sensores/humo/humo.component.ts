import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion2, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { HumoService } from 'src/app/services/humo.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { GasService } from 'src/app/services/gas.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-humo',
  templateUrl: './humo.component.html',
  styleUrls: ['./humo.component.css']
})
export class HumoComponent implements OnInit {

  humos: any[];
  conthumos :any[];
  contno :any[];
  prom:any[];
  constructor(private gasService:GasService,private authService:AuthService,private router:Router,private humoService: HumoService) { }

  ngOnInit(): void {
    let x = localStorage.getItem("humedad");
    console.log("x", x);
 //REGRESA TODAS LAS TEMPERATURAS
    const intervalo = interval(3000)
    intervalo.subscribe((n)=>{
      this.humoService.gethumos().subscribe((res:any) => {
        console.log(res);
        this.humos = res.data;
      })
      //REGRESA LA HUMEDADES MAS BAJA
      // this.humoService.getvecesh().subscribe((resu:any)=>{
      //   console.log(resu);
      //   this.conthumos =resu.data;
      // })
      //REGRESA LA HUMEDADES MAS ALTA
      this.humoService.getvecesgas().subscribe((resu:any)=>{
        console.log(resu);
        this.contno =resu.data;

      })
      this.gasService.getvecesgas2().subscribe((resus:any)=>{
        console.log(resus);
        this.prom =resus.data;

      })
    })
   //REGRESA EL PROMEDIO DE LAS HUMEDADESS
    // this.humedadService.gethumpromedio().subscribe((resuss:any)=>{
    //   console.log(resuss);
    //   this.promedios =resuss.data;
    // })
  }
  exportExcel2() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Listado');

    worksheet.columns =
      [{ header: 'valores', key: 'valores', width: 32 },
      { header: 'fecha', key: 'fecha', width: 32 },
      { header: 'hora', key: 'hora', width: 32 },];
    this.contno.forEach(e => {
      worksheet.addRow({ id: e.id, valores: e.valores, fecha: e.fecha, hora: e.hora }, "n");

    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Tabla_HumoDetallado.xlsx');
    })


  }
  delete(id:string){
    this.humoService.delete(id).subscribe(
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
      this.humos.forEach(e => {
        worksheet.addRow({ id: e.id, Gas: e.Gas, Fecha: e.Fecha, Hora: e.Hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_Humo.xlsx');
      })


    }

  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}


