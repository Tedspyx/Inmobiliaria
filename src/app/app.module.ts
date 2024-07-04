import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';
import { SucursalesServiceService } from '../app/Service/SucursalesService/sucursales-service.service';
import {InmueblesserviceService} from './Service/Inmuebles-Service/inmuebles-service.service';
import { ListarInmueblesComponent } from './Inmuebles/listar-inmuebles/listar-inmuebles.component';
import { AddInmueblesComponent } from './Inmuebles/add-inmuebles/add-inmuebles.component';
import { EditInmueblesComponent } from './Inmuebles/edit-inmuebles/edit-inmuebles.component';
import { AddSucursalesComponent } from './Sucursales/add-sucursales/add-sucursales.component';
import { EditSucursalesComponent } from './Sucursales/edit-sucursales/edit-sucursales.component';
import { ListarSucursalesComponent } from './Sucursales/listar-sucursales/listar-sucursales.component';
import { AddPagoestudioComponent } from './PagoEstudio/add-pagoestudio/add-pagoestudio.component';
import { EditPagoestudioComponent } from './PagoEstudio/edit-pagoestudio/edit-pagoestudio.component';
import { ListarPagoestudioComponent } from './PagoEstudio/listar-pagoestudio/listar-pagoestudio.component';
import { InicioComponent } from './Inicio/inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
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



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarInmueblesComponent,
    AddInmueblesComponent,
    EditInmueblesComponent,
    AddSucursalesComponent,
    EditSucursalesComponent,
    ListarSucursalesComponent,
    AddPagoestudioComponent,
    EditPagoestudioComponent,
    ListarPagoestudioComponent,
    InicioComponent,
    InicioSesionComponent,
    SesionIniciadaComponent,
    PerfilComponent,
    InmuebleDetalleComponent,
    AddInformacioncomercialComponent,
    EditInformacioncomercialComponent,
    ListarInformacioncomercialComponent,
    AddVisitaComponent,
    EditVisitaComponent,
    ListarVisitaComponent,
    AddAnalisisriesgoComponent,
    EditAnalisisriesgoComponent,
    ListarAnalisisriesgoComponent,
    AddCompraComponent,
    EditCompraComponent,
    ListarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService, InmueblesserviceService, SucursalesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
