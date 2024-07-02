import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router:Router){}

  Nuevo(){
    this.router.navigate(["add"]);
  }

  InicioSesion(){
    this.router.navigate(["inicio-sesion"]);
  }

  Sucursales(){
    this.router.navigate(["listar-sucursales"]);
  }
  Inicio(){
    this.router.navigate(["inicio"]);
  }
}
