import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraserviceService } from '../../Service/CompraService/compraservice.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Compra } from '../../Modelo/Compra';

@Component({
  selector: 'app-add-compra',
  templateUrl: './add-compra.component.html',
  styleUrl: './add-compra.component.css'
})
export class AddCompraComponent implements OnInit {
  inmueble:Inmuebles[] = [];
  compra:Compra = new Compra();
  constructor(private router:Router, private service:CompraserviceService){}

  ngOnInit(){
    this.LoadInmueble();    
  }
  LoadInmueble():void{
    this.service.getInmueble()
    .subscribe((data: Inmuebles[])=>{
      this.inmueble =data;
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

  Guardar(compra:Compra){
    this.service.createCompra(compra)
    .subscribe(data=>{
      alert("Compra Realizada!");
      this.router.navigate(["listar-compra"]);
    })
  }


}
