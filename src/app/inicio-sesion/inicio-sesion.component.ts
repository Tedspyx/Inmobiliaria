import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Persona } from '../Modelo/Persona'
import { AuthService } from '../Service/auth.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements OnInit{

  persona: Persona;
  correo: string= "";
  errorMessage: string = ""; 
  constructor(private service: ServiceService,private router:Router, private authService: AuthService){
    this.persona = new Persona();
  }

ngOnInit():void { 
}
SesionIniciar(correo: string): void {
  this.errorMessage = ""; // Resetear el mensaje de error
  this.service.getPersonaByCorreo(correo).subscribe(
    data => { 
      if (data) {
        this.persona = data;
        console.log('Persona encontrada:', JSON.stringify(this.persona, null, 2)); // Imprimir detalles del objeto
        this.authService.iniciarSesion(this.persona.id); // Almacenar el ID del usuario en el servicio de autenticación
        this.router.navigate(["sesion-iniciada"]);
      } else {
        this.errorMessage = "Correo no encontrado, por favor verifique e intente nuevamente.";
      }
    },
    error => {
      this.errorMessage = error; // Mostrar el mensaje de error en la interfaz
    }
  );
}

  Inicio(){
    this.router.navigate(["inicio"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  
  SesionIniciada(){
    this.router.navigate(["sesion-iniciada"]);
  }
}
