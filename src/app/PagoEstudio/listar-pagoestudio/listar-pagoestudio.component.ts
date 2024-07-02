import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PagoestudioserviceService} from '../../Service/PagoEstudioService/pagoestudioservice.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
@Component({
  selector: 'app-listar-pagoestudio',
  templateUrl: './listar-pagoestudio.component.html',
  styleUrl: './listar-pagoestudio.component.css'
})
export class ListarPagoestudioComponent implements OnInit{
  inmuebles: Inmuebles[]=[];
  pagoestudio:PagoEstudio[]=[];
  constructor(private service:PagoestudioserviceService, private router:Router){
  }
    ngOnInit(){
      this.service.getPagoEstudio()
      .subscribe(data=>{
        this.pagoestudio=data;
      }),
      this.service.getInmuebles()
      .subscribe(data=>{
        this.inmuebles=data;
      })
        }     
      
        Editar(pagoestudio:PagoEstudio): void{
          alert("Edite al usuario");
          localStorage.setItem("id",pagoestudio.id.toString());
          this.router.navigate(['edit']);
        }
        Delete(pagoestudio:PagoEstudio){
          this.service.deletePersona(pagoestudio)
          .subscribe(data=>{
            this.pagoestudio=this.pagoestudio.filter(p=>p!==pagoestudio); 
            alert("Usuario eliminado...")
          })
        }
      
  
}
