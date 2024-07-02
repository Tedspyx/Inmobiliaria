import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesserviceService } from '../../Service/Inmuebles-Service/inmuebles-service.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Persona } from '../../Modelo/Persona';
import { TipoInmueble } from '../../Modelo/TipoInmueble';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-inmuebles.component.html',
  styleUrl: './listar-inmuebles.component.css'
})
export class ListarInmueblesComponent implements OnInit{
  tipoInmueble:TipoInmueble[]=[];
  inmueble:Inmuebles[] = [];
  idPersona:Persona[] = [];
  constructor(private service:InmueblesserviceService, private router:Router){
  }

  ngOnInit(): void {
    this.service.getInmuebles()
    .subscribe(data=>{
      this.inmueble=data;
      
    this.service.getPersona()
    .subscribe(data=>{
      this.idPersona=data;
  })
  this.service.getTiposInmueble()
.subscribe(data=>{
  this.tipoInmueble=data;
})
    })
}


  Editar(inmueble:Inmuebles): void{
    localStorage.setItem("id",inmueble.idInmu.toString());
    this.router.navigate(['edit-inmuebles']);
  }
  Delete(inmueble:Inmuebles){
    this.service.deleteInmuebles(inmueble)
    .subscribe(data=>{
      this.inmueble=this.inmueble.filter(i => i !==inmueble);
      alert("Inmueble eliminado...")
    })
  }


}
