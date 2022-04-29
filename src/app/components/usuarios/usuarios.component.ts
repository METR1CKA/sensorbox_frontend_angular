import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eliminacion, timeMessage3 } from 'src/app/functions/alerts';
import { AuthService } from 'src/app/services/auth.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
Usuarios:any[];
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void { 
  this.authService.getUsers().subscribe((res:any) => {
    console.log(res);
    this.Usuarios = res.data;
  })
}
delete(id:string){
  this.authService.deleteUser(id).subscribe(
    res=>{
      console.log(res)
      eliminacion("Saliendo...",);
      this.ngOnInit();
    },
    err=>console.error(err)

  )}
  exportExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Listado');

    worksheet.columns =
      [{ header: 'username', key: 'username', width: 32 },
      { header: 'email', key: 'email', width: 32 },
      { header: 'rol', key: 'rol', width: 32 },
      { header: 'created_at', key: 'created_at', width: 32 },];
    this.Usuarios.forEach(e => {
      worksheet.addRow({ id: e.id, username: e.username, email: e.email,rol: e.rol , created_at: e.created_at }, "n");

    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Tabla_Usuarios.xlsx');
    })


  }
  logout(): void {
    this.authService.removeSession()
    timeMessage3("Saliendo...",5);
    this.router.navigate(['/login']);
  }
}
