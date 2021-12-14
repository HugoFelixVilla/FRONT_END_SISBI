export class Editorial {
    id_EDITORIAL?:number;
    ruc?:string;
    nombre?:string;
    descripcion?:string;
    direccion?:string;
    telefono1?:string;
    telefono2?:string;
    correoElectronico?:string;
    fechaCreacion?:string;
    estado?:string;

    constructor(ruc:string,nombre:string,descripcion:string,direccion:string,telefono1:string,telefono2:string,
        correoElectronico:string,fechaCreacion:string,estado:string ){
            this.ruc=ruc;
            this.nombre=nombre;
            this.descripcion=descripcion;
            this.direccion=direccion;
            this.telefono1=telefono1;
            this.telefono2=telefono2;
            this.correoElectronico=correoElectronico;
            this.fechaCreacion=fechaCreacion;
            this.estado=estado;
        }

}
