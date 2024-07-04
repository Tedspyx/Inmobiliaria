import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { TipoPersona } from '../../Modelo/TipoPersona';
import { Sucursales } from '../../Modelo/Sucursales';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnInit{

  persona: Persona = new Persona();
  idTp: TipoPersona[] = [];
  idSucursales : Sucursales []=[];
  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){
    this.LoadTipoPersonas();
    this.LoadSucursales();
  }
  LoadTipoPersonas(): void {
    this.service.getTiposPersona().subscribe((data: TipoPersona[]) =>{
      this.idTp = data;
    });
  }
  LoadSucursales(): void {
    this.service.getSucursales().subscribe((data: Sucursales[])=>{
      this.idSucursales = data;
    })
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  Cancelar(){
    this.router.navigate(["inicio"]);
  }
  Inicio(){
    this.router.navigate(["inicio"]);
  }
  InicioSesion(){
    this.router.navigate(["inicio-sesion"]);
  }
  Inmuebles(){
    this.router.navigate(["listar-inmuebles"]);
  }


  Guardar(persona:Persona) {
    alert("Tipo persona:"+ persona.idTp);
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agregó la persona con éxito...!!!");
      this.router.navigate(["listar"]);
  })
}
}