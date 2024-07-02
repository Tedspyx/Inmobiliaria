import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesServiceService } from '../../Service/SucursalesService/sucursales-service.service';
import { Sucursales } from '../../Modelo/Sucursales';
import { Persona } from '../../Modelo/Persona';
@Component({
  selector: 'app-listar-sucursales',
  templateUrl: './listar-sucursales.component.html',
  styleUrl: './listar-sucursales.component.css'
})
export class ListarSucursalesComponent implements OnInit{
  personas:Persona [] = [];
  sucursales: Sucursales [] = [];
  constructor(private service:SucursalesServiceService, private router:Router){
    
  }

  ngOnInit() {
    this.service.getSucursales()
    .subscribe(data=>{
      this.sucursales=data
    }),
    this.service.getPersona()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Editar(sucursales:Sucursales): void{
    alert("Edite al usuario");
    localStorage.setItem("id",sucursales.idSucursales.toString());
    this.router.navigate(["edit-sucursales"]);
  }
  Delete(sucursales:Sucursales){
    this.service.deleteSucursales(sucursales)
    .subscribe(data=>{
      this.sucursales=this.sucursales.filter(s=>s!==sucursales);
      alert("Sucursal eliminada")
    })
  }
}
