import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion, eliminacion2, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { UltrasonicoService } from 'src/app/services/ultrasonico.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { interval } from 'rxjs';
@Component({
  selector: 'app-ultrasonico',
  templateUrl: './ultrasonico.component.html',
  styleUrls: ['./ultrasonico.component.css']
})
export class UltrasonicoComponent implements OnInit {

  ultrasonicos: any[];
  bajas :any[];
  altas :any[];
  promedios:any[];
  constructor(private authService:AuthService,private router:Router,private ultrasonicoService: UltrasonicoService) { }

  ngOnInit(): void {
    let x = localStorage.getItem("humedad");
    console.log("x", x);
 //REGRESA TODAS LAS TEMPERATURAS
    const intervalo = interval(3000)
    intervalo.subscribe((n)=>{
      this.ultrasonicoService.getDistancias().subscribe((res:any) => {
        console.log(res);
        this.ultrasonicos = res.data;
      })
      //REGRESA LA HUMEDADES MAS BAJA
      this.ultrasonicoService.getcercana().subscribe((resu:any)=>{
        console.log(resu);
        this.bajas =resu.data;
      })
      //REGRESA LA HUMEDADES MAS ALTA
      this.ultrasonicoService.getalta().subscribe((resus:any)=>{
        console.log(resus);
        this.altas =resus.data;
      })
     //REGRESA EL PROMEDIO DE LAS HUMEDADESS
      this.ultrasonicoService.getpromedio().subscribe((resuss:any)=>{
        console.log(resuss);
        this.promedios =resuss.data;
      })
    })

  }
  delete(id:string){
    this.ultrasonicoService.delete(id).subscribe(
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
        [{ header: 'Distancia', key: 'Distancia', width: 32 },
        { header: 'Fecha', key: 'Fecha', width: 32 },
        { header: 'Hora', key: 'Hora', width: 32 },];
      this.ultrasonicos.forEach(e => {
        worksheet.addRow({ id: e.id, Distancia: e.Distancia, Fecha: e.Fecha, Hora: e.Hora }, "n");

      });

      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'Tabla_Ultrasonicos.xlsx');
      })


    }


  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }

}
