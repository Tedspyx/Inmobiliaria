import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visita } from '../../Modelo/Visita';
import { Persona } from '../../Modelo/Persona';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { VisitaserviceService } from '../../Service/VisitaService/visitaservice.service';
@Component({
  selector: 'app-edit-visita',
  templateUrl: './edit-visita.component.html',
  styleUrl: './edit-visita.component.css'
})
export class EditVisitaComponent implements OnInit{
  visita: Visita = new Visita();
  persona: Persona [] = [];
  inmueble: Inmuebles [] = [];
  constructor(private router:Router, private service: VisitaserviceService){}

  ngOnInit() {
    this.Editar();
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

  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getVisitaId(+id)
    .subscribe(data=>{
        this.visita=data;
      })
  }
  Actualizar(visita:Visita) {
    this.service.updateVisita(visita)
    .subscribe(data=>{
        this.visita=data;
        alert('Actualizado con éxito...!!!');        
        this.router.navigate([`perfil/${this.visita.id}`]);
      });
  }

}
