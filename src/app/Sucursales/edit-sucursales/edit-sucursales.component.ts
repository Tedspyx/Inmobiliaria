import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalesServiceService } from '../../Service/SucursalesService/sucursales-service.service';
import { Persona } from '../../Modelo/Persona';
import { Sucursales } from '../../Modelo/Sucursales';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';

@Component({
  selector: 'app-edit-sucursales',
  templateUrl: './edit-sucursales.component.html',
  styleUrl: './edit-sucursales.component.css'
})
export class EditSucursalesComponent implements OnInit{
  idPersonas: Persona[] = [];
  sucursales: Sucursales = new Sucursales();
  idInmobiliaria: Inmobiliaria[] = [];
  constructor(private router:Router, private service:SucursalesServiceService){}
  ngOnInit(){
    this.Editar();
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
  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getSucursalesId(+id)
    .subscribe(data=>{
        this.sucursales=data;
      })
  }
  Actualizar(sucursales: Sucursales) {
    this.service.updateSucursales(sucursales)
    .subscribe(data =>{
      this.sucursales=data;
        alert('Actualizado con éxito...!!!');
        this.router.navigate(['listar-sucursales']);
      }
    );
  }

}
