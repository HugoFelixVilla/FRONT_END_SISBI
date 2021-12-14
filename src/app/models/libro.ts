import { Editorial } from "./editorial";
import { Especialidad } from "./especialidad";

export class Libro {
    id_LIBRO?:number;
    nombre:string;
    anioPublicacion:string;
    nroPaginas:string;
    especialidad:Especialidad;
    editorial:Editorial;
    estado:string;

    constructor(nombre:string,anioPublicacion:string,nroPaginas:string,especialidad:Especialidad,editorial:Editorial,estado:string){
        this.nombre=nombre;
        this.nroPaginas=nroPaginas;
        this.anioPublicacion=anioPublicacion;
        this.especialidad=especialidad;
        this.editorial=editorial;
        this.estado=estado;
    } 

    
}
