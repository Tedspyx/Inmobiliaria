import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalisisserviceService } from '../../Service/AnalisisService/analisisservice.service';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Persona } from '../../Modelo/Persona';
import { AnalisisRiesgo } from '../../Modelo/AnalisisRiesgo';
@Component({
  selector: 'app-listar-analisisriesgo',
  templateUrl: './listar-analisisriesgo.component.html',
  styleUrl: './listar-analisisriesgo.component.css'
})
export class ListarAnalisisriesgoComponent implements OnInit {
  persona:Persona[]=[];
  pagoestudio:PagoEstudio[]=[];
  analisis:AnalisisRiesgo[]=[];
  constructor(private service:AnalisisserviceService, private router:Router){}

ngOnInit() {
  this.service.getAnalisis()
  .subscribe(data=>{
    this.analisis=data;
  }),
  this.service.getPagoEstudio()
  .subscribe(data=>{
    this.pagoestudio=data;
  }),
  this.service.getPersona()
  .subscribe(data=>{
    this.persona=data;
  });
}

Editar(analisis:AnalisisRiesgo): void{
  alert("Edite al usuario");
  localStorage.setItem("id",analisis.id.toString());
  this.router.navigate(['edit-analisis']);
}
Delete(analisis:AnalisisRiesgo){
  this.service.deleteAnalisis(analisis)
  .subscribe(data=>{
    this.analisis=this.analisis.filter(p=>p!==analisis); 
    alert("Usuario eliminado...")
  })
}
}
