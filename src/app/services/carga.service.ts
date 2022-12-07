import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carga } from '../models/carga';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  baseUrl = 'http://localhost:8082/cargas';

  constructor(private httpClient: HttpClient) { }

  public listaCargas(): Observable<Carga[]> {
    return this.httpClient.get<Carga[]>(this.baseUrl);
  }

  public CargaPorId(idCarga: number): Observable<Carga> {
    return this.httpClient.get<Carga>(this.baseUrl + `/${idCarga}`);
  }


  public GuardarCargas(cargas: Carga): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, cargas);
  }

  public ActualizarCargas(idCarga: number, cargas: Carga): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idCarga}`, cargas);
  }

  public ElimnarCargas(idCarga: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idCarga}`);
  }
}
