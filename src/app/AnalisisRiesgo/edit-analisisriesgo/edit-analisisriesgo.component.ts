import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalisisserviceService} from '../../Service/AnalisisService/analisisservice.service';
import { AnalisisRiesgo } from '../../Modelo/AnalisisRiesgo';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Persona } from '../../Modelo/Persona';



@Component({
  selector: 'app-edit-analisisriesgo',
  templateUrl: './edit-analisisriesgo.component.html',
  styleUrl: './edit-analisisriesgo.component.css'
})
export class EditAnalisisriesgoComponent implements OnInit{
  
  analisis:AnalisisRiesgo = new AnalisisRiesgo();
  pagoestudio:PagoEstudio[]=[];
  persona:Persona[]=[];

  constructor(private router:Router, private service:AnalisisserviceService){}

ngOnInit(){
  this.Editar();
  this.service.getPagoEstudio()
  .subscribe(data=>{
    this.pagoestudio=data;
  }),
  this.service.getPersona()
  .subscribe(data=>{
    this.persona=data;
  });
}

Editar(){
  let id=Number(localStorage.getItem("id"));
  this.service.getAnalisisId(+id)
  .subscribe(data=>{
      this.analisis=data;
    })
}

Actualizar(analisis:AnalisisRiesgo){
  this.service.updateAnalisis(analisis)
  .subscribe(data=>{
    this.analisis=data;
    alert("Se edito con exito..");
    this.router.navigate(["listar-analisis"]);
  })
}
}
