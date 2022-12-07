import { Cliente } from './cliente';
export class Pedidos {
  idpedidos?: number;
  peso: string;
  descripcion: string;
  cliente: Cliente;

  constructor(peso: string, descripcion: string) {
    this.peso = peso;
    this.descripcion = descripcion;
  }
}
