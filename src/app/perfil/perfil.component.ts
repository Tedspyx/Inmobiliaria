import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Persona } from '../Modelo/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  persona: Persona = new Persona();
  constructor(private route: ActivatedRoute,private router:Router, private service: ServiceService  ){}

  ngOnInit(){    
    this.loadPersona();
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
        },
        error => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.error('ID no proporcionado en la ruta');
    }
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
  Sucursales(){
    this.router.navigate(["listar-sucursales"]);
  }
}
