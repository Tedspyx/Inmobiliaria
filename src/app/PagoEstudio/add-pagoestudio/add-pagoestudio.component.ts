import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagoestudioserviceService } from '../../Service/PagoEstudioService/pagoestudioservice.service';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Inmuebles } from '../../Modelo/Inmuebles';
@Component({
  selector: 'app-add-pagoestudio',
  templateUrl: './add-pagoestudio.component.html',
  styleUrl: './add-pagoestudio.component.css'
})
export class AddPagoestudioComponent implements OnInit {

  pagoestudio:PagoEstudio = new PagoEstudio();
  inmueble:Inmuebles [] = [];
  selectedInmuebleId: number = 0;
  personaId: number = 0;
  constructor( private route: ActivatedRoute,private router:Router, private service:PagoestudioserviceService){}

  ngOnInit() {
    this.selectedInmuebleId = +this.route.snapshot.paramMap.get('inmuebleId')!;
    this.personaId = +this.route.snapshot.queryParamMap.get('personaId')!;
    this.pagoestudio.idInmueble = this.selectedInmuebleId; // Set the selected inmueble ID to pagoestudio
    this.LoadInmuebles();
  }
  LoadInmuebles(): void{
    this.service.getInmuebles()
    .subscribe(data=>{
      this.inmueble =data;
    });
  }
  Inicio(){
    this.router.navigate(["sesion-iniciada"]);
  }
  CerrarSesion(){
    this.router.navigate(["inicio"]);
  }
  Inmuebles(){
    this.router.navigate(["listar-inmuebles"])
  }
  Cancelar(){
    this.router.navigate(["perfil"]);
  }


  Guardar(pagoestudio:PagoEstudio){
    this.service.createPagoEstudio(pagoestudio)
    .subscribe(data=>{
      alert("Se ha agregado el pago con exito...");
      this.router.navigate(["perfil"]);
    });
  }
}
