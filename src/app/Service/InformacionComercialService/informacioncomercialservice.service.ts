import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InformacionComercial } from '../../Modelo/InformacionComercial';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Persona } from '../../Modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class InformacioncomercialserviceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/informacioncomercial/submit';
  UrlPersona = 'http://localhost:8080/personas/submit';
  getInformacion(){
    return this.http.get<InformacionComercial[]>(this.Url);
  }
  getPersona(){
    return this.http.get<Persona[]>(this.UrlPersona);
  }
  createInformacion(informacioncomercial:InformacionComercial){
    return this.http.post<InformacionComercial>(this.Url, informacioncomercial);
  }
  getInformacionId(id: number): Observable<InformacionComercial> {
    return this.http.get<InformacionComercial>(`${this.Url}/${id}`);    
  }
  updateInformacion(informacioncomercial: InformacionComercial): Observable<InformacionComercial> {
    return this.http.put<InformacionComercial>(`${this.Url}/${informacioncomercial.idInfo}`, informacioncomercial);
  }

  deletePersona(informacioncomercial:InformacionComercial){
    return this.http.delete<InformacionComercial>(this.Url+"/"+informacioncomercial.idInfo);
  }
}
