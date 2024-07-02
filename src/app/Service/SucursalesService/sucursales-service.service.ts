import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sucursales } from '../../Modelo/Sucursales';
import { Persona } from '../../Modelo/Persona';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';

@Injectable({
  providedIn: 'root'
})
export class SucursalesServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/sucursales/submit';
  UrlPersona = 'http://localhost:8080/personas/submit';
  UrlInmo = 'http://localhost:8080/inmobiliaria/submit';
  getSucursales(){
    return this.http.get<Sucursales[]>(this.Url);
  }

  getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
  }
  
  getInmobiliaria(){
    return this.http.get<Inmobiliaria[]>(this.UrlInmo);
  }

  createSucursales(sucursales:Sucursales){
    return this.http.post<Sucursales>(this.Url, sucursales);
  }

  getSucursalesId(id: number){
    return this.http.get<Sucursales>(this.Url+"/"+id);
  }

  updateSucursales(sucursales:Sucursales){
    return this.http.put<Sucursales>(this.Url+"/"+sucursales.idSucursales,sucursales);
  }

  deleteSucursales(sucursales:Sucursales){
    return this.http.delete<Sucursales>(this.Url+"/"+sucursales.idSucursales);
  }

}

