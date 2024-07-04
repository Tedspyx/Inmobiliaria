import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Visita} from '../../Modelo/Visita';
import {Persona} from '../../Modelo/Persona';
import {Inmuebles} from '../../Modelo/Inmuebles';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VisitaserviceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/visita/submit';
  UrlPersona = 'http://localhost:8080/personas/submit'
  UrlInmu = 'http://localhost:8080/inmuebles/submit';

  getVisita(){
    return this.http.get<Visita[]>(this.Url);
  }

  getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
  }
  getInmueble(){
    return this.http.get<Inmuebles[]>(this.UrlInmu);
  }

  createVisita(visita:Visita){
    return this.http.post<Visita>(this.Url, visita);
  }

  getVisitaId(id: number): Observable<Visita> {
    return this.http.get<Visita>(`${this.Url}/${id}`);
  }

  updateVisita(visita:Visita){
    return this.http.put<Visita>(this.Url+"/"+visita.id,visita);
  }

  deleteVissita(visita:Visita){
    return this.http.delete<Visita>(this.Url+"/"+visita.id);
  }
}
