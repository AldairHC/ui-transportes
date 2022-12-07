import { Pedidos } from './pedidos';

export class Factura {
  num_Factura?: number;
  nombre: string;
  ruc: string;
  cantidad: string;
  Fecha: string;
  sub_Total: string;
  igv: string;
  total: string;
  pedidos:Pedidos;

  constructor(nombre: string, ruc: string, cantidad: string,Fecha: string,
    sub_Total: string, igv: string,total: string) {
    this.nombre = nombre;
    this.ruc = ruc;
    this.cantidad = cantidad;
    this.Fecha = Fecha;
    this.sub_Total = sub_Total;
    this.igv = igv;
    this.total = total;
  }
}
