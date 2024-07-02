import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesserviceService } from '../../Service/Inmuebles-Service/inmuebles-service.service';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Persona } from '../../Modelo/Persona';
import { TipoInmueble } from '../../Modelo/TipoInmueble';
import { AuthService } from '../../Service/auth.service';
@Component({
  selector: 'app-add',
  templateUrl: './add-inmuebles.component.html',
  styleUrl: './add-inmuebles.component.css'
})
export class AddInmueblesComponent implements OnInit{
  tipoInmueble: TipoInmueble[] = [];
  inmuebles: Inmuebles = new Inmuebles();
  idTp: Persona[] =  [];
  selectedImage: string | ArrayBuffer | null = null;
  availableImages: string[] = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    // Agrega más nombres de archivos según sea necesario
  ];
  constructor(private router:Router, private service:InmueblesserviceService){}

  ngOnInit(){
    this.LoadTipoInmueble();
    this.loadPersona();
  }
  LoadTipoInmueble(): void{
    this.service.getTiposInmueble().subscribe((data: TipoInmueble[]) =>{
      this.tipoInmueble = data;
    });
  }
  loadPersona(): void{
    this.service.getPersona()
    .subscribe((data: Persona[])=>{
      this.idTp = data;
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.selectedImage = reader.result;
      reader.readAsDataURL(file);
    }
  }

  selectRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.availableImages.length);
    const selectedImage = this.availableImages[randomIndex];
    console.log('Imagen seleccionada aleatoriamente:', selectedImage); // Verificar imagen seleccionada
    return selectedImage;
  }

Guardar(inmuebles: Inmuebles) {
  if (!this.selectedImage) {
    inmuebles.imagenUrl = this.selectRandomImage();
  }else{
    inmuebles.imagenUrl = this.selectedImage as string;
  }
  console.log('URL de la imagen guardada:', inmuebles.imagenUrl); // Verificar URL de la imagen
  this.service.createInmuebles(inmuebles)
  .subscribe(data=>{
    alert("Se agregó el inmueble con éxito...!!!");
    this.router.navigate(["listar-inmuebles"]);
})
  }
}