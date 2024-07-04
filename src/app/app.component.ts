import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HolaAngular';

  constructor(private router:Router){}


  // Rutas para personas listar y nuevo
  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  // Rutas para inmuebles listar y nuevo
  Inmueble(){
    this.router.navigate(["listar-inmuebles"]);
  }
  NuevoInmueble(){
    this.router.navigate(["add-inmuebles"])
  }

  // Rutas para sucursales listar y nuevo
  Sucursales(){
    this.router.navigate(["listar-sucursales"]);
  }
  NuevoSucursal(){
    this.router.navigate(["add-sucursales"])
  }

  // Ruta para pago estudio

  PagoEstudio(){
    this.router.navigate(["listar-pagoestudio"])
  }

  // pagina de inicio por el momento
  Inicio(){
    this.router.navigate(["inicio"])
  }

  Informacion(){
    this.router.navigate(["listar-info"]);
  }
  NuevoInfo(){
    this.router.navigate(["add-info"]);
  }


  Visita(){
    this.router.navigate(["listar-visita"]);
  }
  NuevaVisita(){
    this.router.navigate(["add-visita"]);
  }

  Analisis(){
    this.router.navigate(["listar-analisis"]);
  }
  NuevoAnalisis(){
    this.router.navigate(["add-analisis"]);
  }
}
