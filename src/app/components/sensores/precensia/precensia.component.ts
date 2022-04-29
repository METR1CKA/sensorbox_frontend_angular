import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion2, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { PrecensiaService } from 'src/app/services/precensia.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { interval } from 'rxjs';
@Component({
  selector: 'app-precensia',
  templateUrl: './precensia.component.html',
  styleUrls: ['./precensia.component.css']
})
export class PrecensiaComponent implements OnInit {
  precensias: any[];
  cantidades :any[];
  cercanas :any[];
  promedios:any[];
  dia:any[];
  constructor(private authService:AuthService,private router:Router,private precensiaService: PrecensiaService) { }

  ngOnInit(): void {
    let x = localStorage.getItem("temperatura");
    console.log("x", x);
 //REGRESA TODAS LAS Precensias
    const intervalo = interval(3000)
    intervalo.subscribe((n) =>{
      this.precensiaService.getMarcas().subscribe((res:any) => {
        console.log(res);
        this.precensias = res.data;
      })
      this.precensiaService.getDia().subscribe((res:any) => {
        console.log(res);
        this.dia = res.data;
      })
      //REGRESA LA Cantidad
      this.precensiaService.getCant().subscribe((resu:any)=>{
        console.log(resu);
        this.cantidades =resu.data;
      })
    })
    //REGRESA LA Precensia cercana
    // this.precensiaService.getpc().subscribe((resus:any)=>{
    //   console.log(resus);
    //   this.cercanas =resus.data;
    // })
   //REGRESA EL PROMEDIO DE PRECENSIA
    // this.precensiaService.getpromedio().subscribe((resuss:any)=>{
    //   console.log(resuss);
    //   this.promedios =resuss.data;
    // })
  }

  delete(id:string){
    this.precensiaService.delete(id).subscribe(
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
        [{ header: 'Presencia', key: 'Presencia', width: 32 },
        { header: 'Fecha', key: 'Fecha', width: 32 },
        { header: 'Hora', key: 'Hora', width: 32 },];
      this.precensias.forEach(e => {
        worksheet.addRow({ id: e.id, Presencia: e.Presencia, Fecha: e.Fecha, Hora: e.Hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_Precensia.xlsx');
      })
    }
    exportExcel2() {
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('Listado');

      worksheet.columns =
        [{ header: 'valores', key: 'valores', width: 32 },
        { header: 'fecha', key: 'fecha', width: 32 },
        { header: 'hora', key: 'hora', width: 32 },];
      this.dia.forEach(e => {
        worksheet.addRow({ id: e.id, valores: e.valores, fecha: e.fecha, hora: e.hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_PrecensiaDia.xlsx');
      })
    }
  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}
