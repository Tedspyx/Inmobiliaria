import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagoEstudio } from '../../Modelo/PagoEstudio';
import { Inmuebles } from '../../Modelo/Inmuebles';
@Injectable({
  providedIn: 'root'
})
export class PagoestudioserviceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/pagoestudio/submit';
  UrlInmuebles = 'http://localhost:8080/inmuebles/submit';

  getPagoEstudio(){
    return this.http.get<PagoEstudio[]>(this.Url);
  }  
  getInmuebles(){
    return this.http.get<Inmuebles[]>(this.UrlInmuebles);
  }
  createPagoEstudio(pagoestudio:PagoEstudio){
    return this.http.post<PagoEstudio>(this.Url, pagoestudio);
  }

  getPagoEstudioId(id: number){
    return this.http.get<PagoEstudio>(this.Url+"/"+id);
  }


  updatePagoEstudio(pagoestudio:PagoEstudio){
    return this.http.put<PagoEstudio>(this.Url+"/"+pagoestudio.id,pagoestudio);
  }

  deletePagoEstudio(pagoestudio:PagoEstudio){
    return this.http.delete<PagoEstudio>(this.Url+"/"+pagoestudio.id);
  }

}
