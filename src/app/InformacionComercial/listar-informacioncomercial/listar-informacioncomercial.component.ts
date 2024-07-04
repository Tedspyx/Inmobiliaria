import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformacioncomercialserviceService } from '../../Service/InformacionComercialService/informacioncomercialservice.service';
import { InformacionComercial } from '../../Modelo/InformacionComercial';
import { Persona } from '../../Modelo/Persona';
@Component({
  selector: 'app-listar-informacioncomercial',
  templateUrl: './listar-informacioncomercial.component.html',
  styleUrl: './listar-informacioncomercial.component.css'
})
export class ListarInformacioncomercialComponent {
  informacioncomercial:InformacionComercial[] = [];
  idPersona: Persona[] =[];
  constructor(private service:InformacioncomercialserviceService, private router:Router){}

  ngOnInit(){
    this.service.getInformacion()
    .subscribe(data=>{
      this.informacioncomercial=data;
    }),
    this.service.getPersona()
    .subscribe(data=>{
      this.idPersona = data;
    });
  }
  Editar(informacioncomercial:InformacionComercial): void{
    alert("Edite al usuario");
    localStorage.setItem("id",informacioncomercial.idInfo.toString());
    this.router.navigate(['edit-info']);
  }
  Delete(informacioncomercial:InformacionComercial){
    this.service.deletePersona(informacioncomercial)
    .subscribe(data=>{
      this.informacioncomercial=this.informacioncomercial.filter(p=>p!==informacioncomercial); 
      alert("Usuario eliminado...")
    })
  }


}
