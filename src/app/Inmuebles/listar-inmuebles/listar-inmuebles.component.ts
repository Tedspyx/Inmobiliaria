import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesserviceService } from '../../Service/Inmuebles-Service/inmuebles-service.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Persona } from '../../Modelo/Persona';
import { TipoInmueble } from '../../Modelo/TipoInmueble';
import { AuthService} from '../../Service/auth.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-inmuebles.component.html',
  styleUrl: './listar-inmuebles.component.css'
})
export class ListarInmueblesComponent implements OnInit{
  tipoInmueble:TipoInmueble[]=[];
  inmueble:Inmuebles[] = [];
  idPersona:Persona[] = [];
  imagePaths: string[] = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/aptoproyecto.jpg',
    'assets/aptos.jpg',
    'assets/aptoventa.jpg',
    'assets/venta.jpg',
    // Agrega tantas rutas como imágenes tengas
  ];
  constructor(private service:InmueblesserviceService, private router:Router, private authService: AuthService){
  }

  ngOnInit(): void {
    this.service.getInmuebles()
    .subscribe(data=>{
      this.inmueble=data;
      
    this.service.getPersona()
    .subscribe(data=>{
      this.idPersona=data;
  })
  this.service.getTiposInmueble()
.subscribe(data=>{
  this.tipoInmueble=data;
})
    })
}

getRandomImagePath(): string {
  const randomIndex = Math.floor(Math.random() * this.imagePaths.length);
  return this.imagePaths[randomIndex];
}
InicioSesion(){
  this.router.navigate(["inicio-sesion"]);
}
Visita(){
  this.router.navigate(["add-visita"]);
}
Comprar(){
  this.router.navigate(["add-compra"]);
}
Nuevo(){
  this.router.navigate(["add"]);
}
Sucursales(){
  this.router.navigate(["listar-sucursales"]);
}
Inicio(){
  this.router.navigate(["inicio"]);
}
AddInmueble(){
  this.router.navigate(["add-inmuebles"]);
}
Inmuebles(){
  this.router.navigate(["listar-inmuebles"]);
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


  Editar(inmueble:Inmuebles): void{
    localStorage.setItem("id",inmueble.idInmu.toString());
    this.router.navigate(['edit-inmuebles']);
  }
  Delete(inmueble:Inmuebles){
    this.service.deleteInmuebles(inmueble)
    .subscribe(data=>{
      this.inmueble=this.inmueble.filter(i => i !==inmueble);
      alert("Inmueble eliminado...")
    })
  }


}
