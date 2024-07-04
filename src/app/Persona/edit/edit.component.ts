import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { TipoPersona } from '../../Modelo/TipoPersona';
import { Sucursales } from '../../Modelo/Sucursales';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  persona: Persona = new Persona();
  tiposPersona: TipoPersona[] = [];
  idSucursales : Sucursales []=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit() {
    this.Editar();
    this.loadPersona();
    this.loadTipoPersona();
    this.LoadSucursales();
  } 
  loadTipoPersona() {
    this.service.getTiposPersona().subscribe((data: TipoPersona[]) => {
      this.tiposPersona = data;
    });
  }
LoadSucursales(): void {
  this.service.getSucursales().subscribe((data: Sucursales[])=>{
    this.idSucursales = data;
  })
}
loadPersona(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam !== null) {
    const id = +idParam;
    this.service.getPersonaId(id).subscribe(
      data => {
        this.persona = data;
        console.log('Persona a editar:', JSON.stringify(this.persona, null, 2)); // Depuración
      },
      error => {
        console.error('Error fetching profile:', error);
      }
    );
  } else {
    console.error('ID no proporcionado en la ruta');
  }
}

Editar(){
  let id=Number(localStorage.getItem("id"));
  this.service.getPersonaId(+id)
  .subscribe(data=>{
      this.persona=data;
    })
}
  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
    .subscribe(data=>{
        this.persona=data;
        alert('Actualizado con éxito...!!!');        
        this.router.navigate([`perfil/${this.persona.id}`]);
      });
  }
}
