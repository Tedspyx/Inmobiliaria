import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { InmueblesserviceService } from '../Service/Inmuebles-Service/inmuebles-service.service';
import { Persona } from '../Modelo/Persona';
import { TipoPersona } from '../Modelo/TipoPersona';
import { Inmuebles } from '../Modelo/Inmuebles';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  persona: Persona = new Persona();
  tipopersona: TipoPersona [] = [];
  inmuebles: Inmuebles[] = [];  

  constructor(private route: ActivatedRoute,private router:Router, private service: ServiceService, private services: InmueblesserviceService  ){}

  ngOnInit(){    
    this.loadPersona();
    this.loadTipoPersona();
  }
  loadTipoPersona():void{
    this.service.getTiposPersona()
    .subscribe(data=>{
      this.tipopersona = data;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['route']) {
      this.loadPersona();
    }
  }

  loadPersona(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.service.getPersonaId(id).subscribe(
        data => {
          this.persona = data;
          console.log('Persona encontrada:', JSON.stringify(this.persona, null, 2)); // Depuración
          this.loadInmuebles(); // Llamada a loadInmuebles después de cargar persona
        },
        error => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.error('ID no proporcionado en la ruta');
    }
  }
  loadInmuebles(): void {
    if (this.persona.id !== undefined) {
      this.services.getInmueblesByPersonaId(this.persona.id).subscribe(
        data => {
          console.log('Inmuebles recibidos:', data);
          if (Array.isArray(data)) {
            this.inmuebles = data;
          } else {
            // Si no es un array, trata de convertirlo en un array de un solo elemento
            this.inmuebles = [data];
          }
        },
        error => {
          console.error('Error fetching inmuebles:', error);
        }
      );
    } else {
      console.error('ID de persona no definido.');
    }
  }
  
  

  PagoEstudio(inmuebleId: number) {
    const personaId = this.persona.id; // Asegúrate de que 'this.persona.id' esté disponible
    this.router.navigate([`add-pagoestudio`, inmuebleId], { queryParams: { personaId } });
  }
  Inicio(){
    this.router.navigate(["sesion-iniciada"]);
  }
  CerrarSesion(){
    this.router.navigate(["inicio"]);
  }
  Editar(){
    this.router.navigate([`edit/${this.persona.id}`]);
  }
  GestionarInformacionComercial() {
    this.router.navigate([`add-info`]);
  }
  Sucursales(){
    this.router.navigate(["listar-sucursales"]);
  }
  Inmuebles(){
    this.router.navigate(["listar-inmuebles"]);
  }
  Salir(){
    this.router.navigate(["inicio"]);
  }
}