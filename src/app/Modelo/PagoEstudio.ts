import { Inmuebles } from "./Inmuebles";

export class PagoEstudio{
    
    id: number = 0;
    idInmueble: Inmuebles = new Inmuebles();
    codigoTransac: String = '';
    fechaPago: String = '';
    montoPago: String = '';    

    constructor(){}
}