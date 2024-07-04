import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformacioncomercialserviceService } from '../../Service/InformacionComercialService/informacioncomercialservice.service';
import { Persona } from '../../Modelo/Persona';
import { InformacionComercial } from '../../Modelo/InformacionComercial';
@Component({
  selector: 'app-edit-informacioncomercial',
  templateUrl: './edit-informacioncomercial.component.html',
  styleUrl: './edit-informacioncomercial.component.css'
})
export class EditInformacioncomercialComponent implements OnInit{
  persona: Persona [] = [];
  id: number = 0;
  informacioncomercial: InformacionComercial = new InformacionComercial();
  constructor(private router:Router, private service:InformacioncomercialserviceService){}

  ngOnInit() {
    this.Editar();
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

  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getInformacionId(+id)
    .subscribe(data=>{
      this.informacioncomercial=data;
    })
  }
  Actualizar(informacioncomercial:InformacionComercial) {
    this.service.updateInformacion(informacioncomercial)
    .subscribe(data=>{
      this.informacioncomercial=data;
      alert('Actualizado con éxito...!!!');
      this.router.navigate(['listar-info']);

    })
  }


}
