import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { TipoPersona } from '../Modelo/TipoPersona';
import { Sucursales } from '../Modelo/Sucursales';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/personas/submit';
  Urltipo = 'http://localhost:8080/tipopersonas/submit'
  Urlsucursales = 'http://localhost:8080/sucursales/submit';
  Urlcorreo = 'http://localhost:8080/personas/verify';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  getTiposPersona(){
    return this.http.get<TipoPersona[]>(this.Urltipo);
  }
  getSucursales(){
    return this.http.get<Sucursales[]>(this.Urlsucursales);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona);
  }

  getPersonaId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.Url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

  getPersonaByCorreo(correo: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.Urlcorreo}/${correo}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Correo no encontrado, por favor verifique e intente nuevamente.';
    if (error.status === 404) {
      errorMessage = 'Correo no encontrado.';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}