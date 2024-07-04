import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Compra } from '../../Modelo/Compra';
import { Inmuebles } from '../../Modelo/Inmuebles';
@Injectable({
  providedIn: 'root'
})
export class CompraserviceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/compras/submit';
  UrlInmu = 'http://localhost:8080/inmuebles/submit';

  getCompra(){
    return this.http.get<Compra[]>(this.Url);
  }
  getInmueble(){
    return this.http.get<Inmuebles[]>(this.UrlInmu);
  }
  createCompra(compra:Compra){
    return this.http.post<Compra>(this.Url, compra);
  }

  getCompraId(id: number){
    return this.http.get<Compra>(`${this.Url}/${id}`);
  }

  updateCompra(compra:Compra){
    return this.http.put<Compra>(this.Url+"/"+compra.idCompras,compra);
  }

  deleteCompra(compra:Compra){
    return this.http.delete<Compra>(this.Url+"/"+compra.idCompras);
  }

}
