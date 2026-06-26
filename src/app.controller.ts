import { Body, Controller, Delete, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePersonaDto } from './person-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return this.appService.getPersons().map(p => JSON.stringify(p)).join(', ');
  }

  @Post()
  addPerson(@Body() createPersonaDto: CreatePersonaDto): string {
    const newPerson = {
      rut: createPersonaDto.rut,
      nombre: createPersonaDto.nombre,
      nacimiento: createPersonaDto.nacimiento,
      ciudad: createPersonaDto.ciudad,
      gustos: createPersonaDto.gustos,
    };

    this.appService.addPerson(newPerson);
    return 'Persona agregada exitosamente';
  }

  @Delete()
  deletePerson(@Body() { rut }: { rut: string }) {
    this.appService.deletePerson(rut);
  }
}
