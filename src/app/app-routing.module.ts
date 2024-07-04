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
import { AddInformacioncomercialComponent } from './InformacionComercial/add-informacioncomercial/add-informacioncomercial.component';
import { EditInformacioncomercialComponent } from './InformacionComercial/edit-informacioncomercial/edit-informacioncomercial.component';
import { ListarInformacioncomercialComponent } from './InformacionComercial/listar-informacioncomercial/listar-informacioncomercial.component';
import { AddVisitaComponent } from './Visita/add-visita/add-visita.component';
import { EditVisitaComponent } from './Visita/edit-visita/edit-visita.component';
import { ListarVisitaComponent } from './Visita/listar-visita/listar-visita.component';
import { AddAnalisisriesgoComponent } from './AnalisisRiesgo/add-analisisriesgo/add-analisisriesgo.component';
import { EditAnalisisriesgoComponent } from './AnalisisRiesgo/edit-analisisriesgo/edit-analisisriesgo.component';
import { ListarAnalisisriesgoComponent } from './AnalisisRiesgo/listar-analisisriesgo/listar-analisisriesgo.component';
import { AddCompraComponent } from './Compra/add-compra/add-compra.component';
import { EditCompraComponent } from './Compra/edit-compra/edit-compra.component';
import { ListarCompraComponent } from './Compra/listar-compra/listar-compra.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'sesion-iniciada', component: SesionIniciadaComponent },
  {path: 'inicio-sesion', component: InicioSesionComponent},  
  {path: 'perfil', component: PerfilComponent}, 
  {path: 'perfil/:id', component: PerfilComponent },
  {path: 'listar-info', component: ListarInformacioncomercialComponent},
  {path: 'edit-info', component: EditInformacioncomercialComponent}, 
  {path: 'add-info', component: AddInformacioncomercialComponent},  
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
  {path: 'add-pagoestudio/:inmuebleId', component: AddPagoestudioComponent},
  {path: 'edit-pagoestudio', component: EditPagoestudioComponent},
  {path: 'listar-analisis', component: ListarAnalisisriesgoComponent},
  {path: 'add-analisis', component: AddAnalisisriesgoComponent},
  {path: 'edit-analisis', component: EditAnalisisriesgoComponent},
  {path: 'listar-visita', component: ListarVisitaComponent},
  {path: 'add-visita', component: AddVisitaComponent},
  {path: 'edit-visita', component: EditVisitaComponent},
  {path: 'listar-compra', component: ListarCompraComponent},
  {path: 'add-compra', component: AddCompraComponent},
  {path: 'edit-compra', component: EditCompraComponent},
  {path: '', redirectTo: '/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
