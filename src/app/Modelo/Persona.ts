import { TipoPersona } from "./TipoPersona";
export class Persona{
    
    nombres: String = '';
    apellidos: String = '';
    telefono: String = '';
    correo: String = '';
    direccion: String = '';
    id: number = 0;
    idTp: TipoPersona = new TipoPersona();
    idSucursales?: number;
    constructor(){}
}