export class Especialidad {
    id_Especialidad?:number;
    nombre?:string;
    descripcion?:string;
    estado?:string;

    constructor(nombre:string,descripcion:string,estado:string){
    
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.estado=estado;
    }
}
