import { Pedidos } from './../models/pedidos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseUrl = 'http://localhost:8082/registrarp';

  constructor(private httpClient: HttpClient) { }

  public listaPedidos(): Observable<Pedidos[]> {
    return this.httpClient.get<Pedidos[]>(this.baseUrl);
  }

}
