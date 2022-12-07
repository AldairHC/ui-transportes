import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  baseUrl = 'http://localhost:8082/facturar';

  constructor(private httpClient: HttpClient) { }

  public listaFacturas(): Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(this.baseUrl);
  }

  public FacturaPorId(idFactura: number): Observable<Factura> {
    return this.httpClient.get<Factura>(this.baseUrl + `/${idFactura}`);
  }


  public GuardarFacturas(factura: Factura): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, factura);
  }

  public ActualizarFacturas(idFactura: number, factura: Factura): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idFactura}`, factura);
  }

  public ElimnarFacturas(idFactura: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idFactura}`);
  }
}
