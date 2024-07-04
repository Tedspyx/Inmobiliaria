import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraserviceService } from '../../Service/CompraService/compraservice.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Compra } from '../../Modelo/Compra';
@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrl: './listar-compra.component.css'
})
export class ListarCompraComponent implements OnInit {

  compra:Compra []= [];
  inmueble:Inmuebles[]=[];
  constructor(private service:CompraserviceService, private router:Router){}

  ngOnInit(){
    this.service.getInmueble()
    .subscribe(data=>{
      this.inmueble=data;
    }),
    this.service.getCompra()
    .subscribe(data=>{
      this.compra=data;
    });
  }

  Editar(compra:Compra):void{
    alert("Edite la compra");
    localStorage.setItem("id",compra.idCompras.toString());
    this.router.navigate(["edit-compra"]);
  }
  Delete(compra:Compra){
    this.service.deleteCompra(compra)
    .subscribe(data=>{
      this.compra=this.compra.filter(c => c !== compra);
    })
  }


}
