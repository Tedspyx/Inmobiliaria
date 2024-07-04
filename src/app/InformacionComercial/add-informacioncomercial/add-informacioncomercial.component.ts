import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../Modelo/Persona';
import { InformacioncomercialserviceService } from '../../Service/InformacionComercialService/informacioncomercialservice.service';
import { InformacionComercial } from '../../Modelo/InformacionComercial';

@Component({
  selector: 'app-add-informacioncomercial',
  templateUrl: './add-informacioncomercial.component.html',
  styleUrl: './add-informacioncomercial.component.css'
})
export class AddInformacioncomercialComponent implements OnInit{

  persona: Persona [] = [];
  informacioncomercial: InformacionComercial = new InformacionComercial();
  constructor(private router:Router, private service:InformacioncomercialserviceService){}

ngOnInit() {
  this.LoadPersona();
}
LoadPersona(): void{
  this.service.getPersona()
  .subscribe((data: Persona [])=>{
    this.persona = data;
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
Guardar(informacioncomercial:InformacionComercial) {
  alert("Tipo persona:"+ informacioncomercial.idInfo);
  this.service.createInformacion(informacioncomercial)
  .subscribe(data=>{
    alert("Se agregó la persona con éxito...!!!");
    this.router.navigate(["listar-info"]);
})
}


}
