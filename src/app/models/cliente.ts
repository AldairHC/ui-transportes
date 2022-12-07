export class Cliente{
  idcliente?: number;
  dni: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  direccion: string;
  telefono: string;

  constructor(dni: string, nombres: string,apellido_paterno: string, apellido_materno: string,
    direccion: string, telefono: string) {
      this.dni = dni;
      this.nombres = nombres;
      this.apellido_paterno = apellido_paterno;
      this.apellido_materno = apellido_materno;
      this.direccion = direccion;
      this.telefono = telefono;

  }
}
