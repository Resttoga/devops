import { Injectable } from '@nestjs/common';
import { Persona } from './interface';
import { CreatePersonaDto } from './person-dto';

@Injectable()
export class AppService {

  private personas: Persona[] = [];

  getPersons(): Persona[] {
    return this.personas;
  }

  addPerson(createPersonaDto: CreatePersonaDto): Persona {
    const nuevaPersona: Persona = {
      rut: createPersonaDto.rut,
      nombre: createPersonaDto.nombre,
      nacimiento: new Date(createPersonaDto.nacimiento), 
      ciudad: createPersonaDto.ciudad,
    };

    this.personas.push(nuevaPersona);
    return nuevaPersona;
  }

  deletePerson(rut: string): string {
    const index = this.personas.findIndex((p) => p.rut === rut);
    if (index !== -1) {
      this.personas.splice(index, 1);
      return `Persona ${rut} eliminada`;
    }
    return "Persona no encontrada";
  }
}
