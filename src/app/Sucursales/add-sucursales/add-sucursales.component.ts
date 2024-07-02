import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesServiceService } from '../../Service/SucursalesService/sucursales-service.service';
import { Persona } from '../../Modelo/Persona';
import { Sucursales } from '../../Modelo/Sucursales';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
@Component({
  selector: 'app-add-sucursales',
  templateUrl: './add-sucursales.component.html',
  styleUrl: './add-sucursales.component.css'
})
export class AddSucursalesComponent implements OnInit{
  idPersonas: Persona[] = [];
  sucursales: Sucursales = new Sucursales();
  idInmobiliaria: Inmobiliaria[] = [];
  constructor(private router:Router, private service:SucursalesServiceService){}

ngOnInit(){  
  this.LoadPersona();
  this.LoadInmobiliaria();
}
LoadPersona():void{
  this.service.getPersona()
  .subscribe((data: Persona[])=>{
    this.idPersonas = data;
  });
}
LoadInmobiliaria():void{
  this.service.getInmobiliaria()
  .subscribe((data: Inmobiliaria[])=>{
    this.idInmobiliaria = data;
  });
}

Guardar(sucursales:Sucursales){
  this.service.createSucursales(sucursales)
  .subscribe(data=>{
    alert("Se agrego sucursal con extio..!");
    this.router.navigate(["listar-sucursales"]);
  })
}


}
