import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AnalisisRiesgo } from '../../Modelo/AnalisisRiesgo';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Persona } from '../../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class AnalisisserviceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/analisisriesgo/submit';
  UrlPago = 'http://localhost:8080/pagoestudio/submit';
  UrlPersona = 'http://localhost:8080/personas/submit';

  getAnalisis(){
    return this.http.get<AnalisisRiesgo[]>(this.Url);
  }
  getPagoEstudio(){
    return this.http.get<PagoEstudio[]>(this.UrlPago);
  }
  getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
  }
  createAnalisis(analisis:AnalisisRiesgo){
    return this.http.post<AnalisisRiesgo>(this.Url, analisis);
  }
  getAnalisisId(id:number){
    return this.http.get<AnalisisRiesgo>(`${this.Url}/${id}`);
  }
  updateAnalisis(analisis:AnalisisRiesgo){
    return this.http.put<AnalisisRiesgo>(this.Url+"/"+analisis.id,analisis);
  }
  deleteAnalisis(analisis:AnalisisRiesgo){
    return this.http.delete<AnalisisRiesgo>(this.Url+"/"+analisis.id);
  }

}
