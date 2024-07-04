import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitaserviceService} from '../../Service/VisitaService/visitaservice.service';
import { Persona } from '../../Modelo/Persona';
import { Visita } from '../../Modelo/Visita';
import { Inmuebles } from '../../Modelo/Inmuebles';
@Component({
  selector: 'app-listar-visita',
  templateUrl: './listar-visita.component.html',
  styleUrl: './listar-visita.component.css'
})
export class ListarVisitaComponent implements OnInit{

    visita: Visita []= [];
    persona:Persona[]=[];
    inmueble: Inmuebles[]=[];
    constructor(private service:VisitaserviceService, private router:Router){
    }

    ngOnInit(){
      this.service.getPersona()
      .subscribe(data=>{
        this.persona=data;
      }),
      this.service.getVisita()
      .subscribe(data=>{
        this.visita=data;
      }),
      this.service.getInmueble()
      .subscribe(data=>{
        this.inmueble=data;
      });
    }

    Editar(visita:Visita): void{
      alert("Edite al usuario");
      localStorage.setItem("id",visita.id.toString());
      this.router.navigate(['edit-visita']);
    }
    Delete(visita:Visita){
      this.service.deleteVissita(visita)
      .subscribe(data=>{
        this.visita=this.visita.filter(p=>p!==visita); 
        alert("Usuario eliminado...")
      })
    }
  

}
