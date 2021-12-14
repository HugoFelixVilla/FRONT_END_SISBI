import { NuevoPersona } from "./nuevo-persona";
import { Rol } from "./rol";

export class RolPersona {
    id_PERSONA_ROL?:number;
    persona:NuevoPersona;
    rol:Rol;

    constructor(persona:NuevoPersona,rol:Rol){
        this.persona=persona;
        this.rol=rol; 
    }

}
