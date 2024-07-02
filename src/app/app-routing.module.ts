import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarInmueblesComponent } from './Inmuebles/listar-inmuebles/listar-inmuebles.component';
import { AddInmueblesComponent } from './Inmuebles/add-inmuebles/add-inmuebles.component';
import { EditInmueblesComponent } from './Inmuebles/edit-inmuebles/edit-inmuebles.component';
import { ListarSucursalesComponent } from './Sucursales/listar-sucursales/listar-sucursales.component';
import { AddSucursalesComponent } from './Sucursales/add-sucursales/add-sucursales.component';
import { EditSucursalesComponent } from './Sucursales/edit-sucursales/edit-sucursales.component';
import { ListarPagoestudioComponent } from './PagoEstudio/listar-pagoestudio/listar-pagoestudio.component';
import { AddPagoestudioComponent } from './PagoEstudio/add-pagoestudio/add-pagoestudio.component';
import { EditPagoestudioComponent } from './PagoEstudio/edit-pagoestudio/edit-pagoestudio.component';
import { SesionIniciadaComponent } from './sesion-iniciada/sesion-iniciada.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InmuebleDetalleComponent } from './inmueble-detalle/inmueble-detalle.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'sesion-iniciada', component: SesionIniciadaComponent },
  {path: 'inicio-sesion', component: InicioSesionComponent},  
  {path: 'perfil', component: PerfilComponent}, 
  {path: 'perfil/:id', component: PerfilComponent }, 
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent},  
  {path: 'edit/:id', component:EditComponent}, 
  {path: 'listar-inmuebles', component: ListarInmueblesComponent },
  {path: 'listar-inmuebles/:id', component: ListarInmueblesComponent },
  {path: 'add-inmuebles', component: AddInmueblesComponent },
  {path: 'edit-inmuebles', component: EditInmueblesComponent },
  {path: 'inmueble-detalle', component: InmuebleDetalleComponent },
  {path: 'inmueble-detalle/:id', component: InmuebleDetalleComponent },
  {path: 'listar-sucursales', component: ListarSucursalesComponent},
  {path: 'add-sucursales', component: AddSucursalesComponent},
  {path: 'edit-sucursales', component: EditSucursalesComponent},
  {path: 'listar-pagoestudio', component: ListarPagoestudioComponent},
  {path: 'add-pagoestudio', component: AddPagoestudioComponent},
  {path: 'edit-pagoestudio', component: EditPagoestudioComponent},
  {path: '', redirectTo: '/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
