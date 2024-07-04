import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagoestudioserviceService } from '../../Service/PagoEstudioService/pagoestudioservice.service';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Inmuebles } from '../../Modelo/Inmuebles';
@Component({
  selector: 'app-edit-pagoestudio',
  templateUrl: './edit-pagoestudio.component.html',
  styleUrl: './edit-pagoestudio.component.css'
})
export class EditPagoestudioComponent implements OnInit{
  pagoestudio:PagoEstudio = new PagoEstudio();
  inmueble:Inmuebles [] = [];
  selectedInmuebleId: number = 0;
  personaId: number = 0;
  constructor( private route: ActivatedRoute,private router:Router, private service:PagoestudioserviceService){}

  ngOnInit() {
    this.Editar();
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

  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getPagoEstudioId(+id)
    .subscribe(data=>{
        this.pagoestudio=data;
      })
  }
  Actualizar(pagoestudio: PagoEstudio) {
    this.service.updatePagoEstudio(pagoestudio)
    .subscribe(data =>{
      this.pagoestudio=data;
        alert('Actualizado con éxito...!!!');
        this.router.navigate(['listar-pagoestudio']);
      }
    );
  }
}
