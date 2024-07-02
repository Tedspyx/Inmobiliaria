import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../Modelo/Persona';
import { TipoPersona } from '../../Modelo/TipoPersona';
import { Sucursales } from '../../Modelo/Sucursales';

@Injectable({
  providedIn: 'root'
})
export class ComercialserviceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/personas/submit';
  Urltipo = 'http://localhost:8080/tipopersonas/submit';
  UrlSucursal = 'http://localhost:8080/sucursales/submit';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  getTiposPersona(){
    return this.http.get<TipoPersona[]>(this.Urltipo);
  }
  
  getSucursal(){
    return this.http.get<Sucursales[]>(this.UrlSucursal);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona);
  }

  getPersonaId(id: number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

}
