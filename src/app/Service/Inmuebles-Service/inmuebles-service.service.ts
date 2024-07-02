import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inmuebles } from '../../Modelo/Inmuebles';
import { Persona } from '../../Modelo/Persona';
import { TipoInmueble } from '../../Modelo/TipoInmueble';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InmueblesserviceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/inmuebles/submit';
  Urltipo = 'http://localhost:8080/tipo_inmueble/submit';
  UrlPersona = 'http://localhost:8080/personas/submit';
  getInmuebles(){
    return this.http.get<Inmuebles[]>(this.Url);
  }
  getTiposInmueble(){
    return this.http.get<TipoInmueble[]>(this.Urltipo);
  }
  getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
  }
  createInmuebles(inmuebles: Inmuebles){
    return this.http.post<Inmuebles>(this.Url, inmuebles);
  }

  getInmueblesId(id: number): Observable<Inmuebles> {
    return this.http.get<Inmuebles>(`${this.Url}/${id}`);
  }

  updateInmuebles(inmuebles: Inmuebles){
    return this.http.put<Inmuebles>(this.Url+"/"+inmuebles.idInmu,inmuebles);
  }

  deleteInmuebles(inmuebles:Inmuebles){
    return this.http.delete<Inmuebles>(this.Url+"/"+inmuebles.idInmu);
  }

}
