import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesserviceService } from '../../Service/Inmuebles-Service/inmuebles-service.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Persona } from '../../Modelo/Persona';
import { TipoInmueble } from '../../Modelo/TipoInmueble';

@Component({
  selector: 'app-edit-inmuebles',
  templateUrl: './edit-inmuebles.component.html',
  styleUrl: './edit-inmuebles.component.css'
})
export class EditInmueblesComponent implements OnInit{
  inmuebles: Inmuebles = new Inmuebles();
  idTp : Persona[] = [];
  tipoInmueble: TipoInmueble[] = [];

  constructor(
    private router: Router,
    private service: InmueblesserviceService
  ) {}

  ngOnInit() {
    this.Editar();
    this.loadTipoInmueble();
    this.loadPersona();
  }
  loadTipoInmueble(){
    this.service.getTiposInmueble()
    .subscribe((data: TipoInmueble[])=>{
      this.tipoInmueble = data;
    });
  }
  loadPersona(){
    this.service.getPersona()
    .subscribe((data: Persona[])=>{
      this.idTp = data;
    })
  }

  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getInmueblesId(+id)
    .subscribe(data=>{
        this.inmuebles=data;
      })
  }
  Actualizar(inmuebles: Inmuebles) {
    this.service.updateInmuebles(inmuebles)
    .subscribe(data =>{
      this.inmuebles=data;
        alert('Actualizado con éxito...!!!');
        this.router.navigate(['listar-inmuebles']);
      }
    );
  }
}
