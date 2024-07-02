import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioId: number | null = null;

  constructor() {}

  iniciarSesion(id: number): void {
    this.usuarioId = id;
    // Puedes almacenar el ID en localStorage o sessionStorage si deseas persistencia en recargas de página
    localStorage.setItem('usuarioId', id.toString());
  }

  cerrarSesion(): void {
    this.usuarioId = null;
    localStorage.removeItem('usuarioId');
  }

  getUsuarioId(): number | null {
    // Si estás usando localStorage, asegúrate de convertir el valor de vuelta a número
    const id = localStorage.getItem('usuarioId');
    return id ? +id : null;
  }
}
