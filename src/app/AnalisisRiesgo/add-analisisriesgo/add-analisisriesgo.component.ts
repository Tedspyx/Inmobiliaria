import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalisisserviceService} from '../../Service/AnalisisService/analisisservice.service';
import { AnalisisRiesgo } from '../../Modelo/AnalisisRiesgo';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Persona } from '../../Modelo/Persona';


@Component({
  selector: 'app-add-analisisriesgo',
  templateUrl: './add-analisisriesgo.component.html',
  styleUrl: './add-analisisriesgo.component.css'
})
export class AddAnalisisriesgoComponent implements OnInit{

  analisis:AnalisisRiesgo = new AnalisisRiesgo();
  pagoestudio:PagoEstudio[]=[];
  persona:Persona[]=[];

  constructor(private router:Router, private service:AnalisisserviceService){}

ngOnInit(){
  this.service.getPagoEstudio()
  .subscribe(data=>{
    this.pagoestudio=data;
  }),
  this.service.getPersona()
  .subscribe(data=>{
    this.persona=data;
  });
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


Guardar(analisis:AnalisisRiesgo){
  this.service.createAnalisis(analisis)
  .subscribe(data=>{
    alert("Se agrego analisis con exito");
    this.router.navigate(["listar-analisis"]);
  })
}


}
