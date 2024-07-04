import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from '../../Modelo/Visita';
import { Persona } from '../../Modelo/Persona';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { VisitaserviceService } from '../../Service/VisitaService/visitaservice.service';
@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrl: './add-visita.component.css'
})
export class AddVisitaComponent implements OnInit{
  visita: Visita = new Visita();
  persona: Persona [] = [];
  inmueble: Inmuebles [] = [];
  constructor(private router:Router, private service: VisitaserviceService){}

  ngOnInit() {
    this.LoadPersona();
    this.LoadInmueble();
  }
  LoadPersona(): void {
    this.service.getPersona()
    .subscribe((data: Persona[])=>{
      this.persona = data;
    });
  }
  LoadInmueble(): void{
    this.service.getInmueble()
    .subscribe((data: Inmuebles[])=>{
      this.inmueble = data;
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
  Venta(){
    this.router.navigate(["listar-inmuebles"]);
  }
  Alquiler(){
    this.router.navigate(["listar-inmuebles"]);
  }

  Guardar(visita:Visita){
    this.service.createVisita(visita)
    .subscribe(data=>{
      alert("Se agrego visita con exito...");
      this.router.navigate(["listar-visita"]);
    })
  }
  

}
