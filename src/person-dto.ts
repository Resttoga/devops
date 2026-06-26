export class CreatePersonaDto {
  rut: string;
  nombre: string;
  nacimiento: string | Date;
  ciudad: string;
}