import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
@Component({
  selector: 'app-sesion-iniciada',
  templateUrl: './sesion-iniciada.component.html',
  styleUrl: './sesion-iniciada.component.css'
})
export class SesionIniciadaComponent {
  constructor(private router:Router,  private authService: AuthService){}

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
  Inmuebles(){
    this.router.navigate(["listar-inmuebles"]);
  }
}
