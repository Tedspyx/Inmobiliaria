import { Persona } from "./Persona";
import { Inmobiliaria } from './Inmobiliaria';
export class Sucursales{
    

    
    idInmobiliaria: Inmobiliaria[] = [];
    ciudad: String = '';
    telefono: String = '';
    correo: String = '';
    direccion: String = '';
    idSucursales: number = 0;
    idPersonas: Persona[] = [];

    constructor(){}
}