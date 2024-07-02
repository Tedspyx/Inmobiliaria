import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmuebles } from '../Modelo/Inmuebles';
import { AuthService } from '../Service/auth.service';
import { InmueblesserviceService } from '../Service/Inmuebles-Service/inmuebles-service.service';

@Component({
  selector: 'app-inmueble-detalle',
  templateUrl: './inmueble-detalle.component.html',
  styleUrls: ['./inmueble-detalle.component.css']
})
export class InmuebleDetalleComponent implements OnInit {
  inmueble: Inmuebles | null = null;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private authService: AuthService,
    private inmuebleService: InmueblesserviceService
  ) {}

  ngOnInit(): void {
    this.loadInmueble();
  }

  loadInmueble(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.inmuebleService.getInmueblesId(id).subscribe(
        data => {
          this.inmueble = data;
          console.log('Inmueble encontrado:', JSON.stringify(this.inmueble, null, 2)); // Imprimir detalles del objeto
          console.log('URL de la imagen:', this.inmueble.imagenUrl); // Verificar URL de la imagen
        },
        error => {
          console.error('Error al obtener el inmueble:', error);
        }
      );
    } else {
      console.error('ID no proporcionado en la ruta');
    }
  }
  AddInmueble(){
    this.router.navigate(["add-inmuebles"]);
  }
  Sucursales(){
    this.router.navigate(["listar-sucursales"]);
  }
  Inicio(){
    this.router.navigate(["sesion-iniciada"]);
  }
  MiPerfil() {
    const userId = this.authService.getUsuarioId();
    if (userId !== null) {
      this.router.navigate([`perfil/${userId}`]);
    } else {
      console.error('No se pudo obtener el ID del usuario');
    }
  }
  CerrarSesion() {
    // Aquí puedes agregar la lógica para limpiar cualquier estado de sesión, si es necesario
    this.router.navigate(["inicio"]);
}
Venta(){
  this.router.navigate(["listar-inmuebles"]);
}
Alquiler(){
  this.router.navigate(["listar-inmuebles"]);
}
}