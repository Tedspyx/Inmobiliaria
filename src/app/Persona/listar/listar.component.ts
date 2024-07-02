import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService }from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { TipoPersona } from '../../Modelo/TipoPersona';
import { Sucursales } from '../../Modelo/Sucursales';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  tiposPersona:TipoPersona[]=[];
  personas:Persona[] = [];
  idSucursales:Sucursales[] = [];
  constructor(private service:ServiceService, private router:Router){
  }
    

  ngOnInit(){
this.service.getPersonas()
.subscribe(data=>{
  this.personas=data;
}),
this.service.getTiposPersona()
.subscribe(data=>{
  this.tiposPersona=data;
}),
this.service.getSucursales()
.subscribe(data=>{
  this.idSucursales=data;
})
  }


  Editar(persona:Persona): void{
    alert("Edite al usuario");
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(['edit']);
  }
  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona); 
      alert("Usuario eliminado...")
    })
  }


} 