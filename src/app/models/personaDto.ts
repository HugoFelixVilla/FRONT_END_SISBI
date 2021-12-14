export class personaDto {
    id_Persona?:number;
    dni:string;
    nombre:string;
    apellidos:string;
    direccion:string;
    telefono:string;
    correoElectronico:string;
    clave:string;
    estado:string;

    constructor(dni:string,nombre:string,apellidos:string,direccion:string,
        telefono:string,correoElectronico:string,clave:string,
        estado:string){
            this.dni=dni;
            this.nombre=nombre;
            this.apellidos=apellidos;
            this.direccion=direccion;
            this.telefono=telefono;
            this.correoElectronico=correoElectronico;
            this.clave=clave;
            this.estado=estado;
              
        }

}