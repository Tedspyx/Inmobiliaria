import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraserviceService } from '../../Service/CompraService/compraservice.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Compra } from '../../Modelo/Compra';

@Component({
  selector: 'app-edit-compra',
  templateUrl: './edit-compra.component.html',
  styleUrl: './edit-compra.component.css'
})
export class EditCompraComponent {
  inmueble:Inmuebles[] = [];
  compra:Compra = new Compra();
  constructor(private router:Router, private service:CompraserviceService){}

  ngOnInit(){
    this.Editar();
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


  Editar(){
    let id=Number(localStorage.getItem("id"));
    this.service.getCompraId(+id)
    .subscribe(data=>{
        this.compra=data;
      })
  }
    Actualizar(compra: Compra) {
      this.service.updateCompra(compra)
      .subscribe(data=>{
          this.compra=data;
          alert('Actualizado con éxito...!!!');        
          this.router.navigate(["listar-compra"]);
        });
    }
}
