import { TipoInmueble } from "./TipoInmueble";
export class Inmuebles{
    
    
   
    direccion: String = '';
    barrio: String = '';
    ciudad: String = '';    
    descripcionAlrededores: String = '';
    descripcionSitio: String = '';
    idInmu: number = 0;
    idTp: number = 0;
    idTipoInmu: TipoInmueble = new TipoInmueble();
    imagenUrl: string = '';
    constructor(){}
}