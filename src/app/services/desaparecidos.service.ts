import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesaparecidosService {
  private apiUrlBase = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/';

  private parametrosSubject = new BehaviorSubject<any>(null);
  parametros$ = this.parametrosSubject.asObservable();

  constructor(private http: HttpClient) {}

  notificarAlteracao(parametros: any) {
    this.parametrosSubject.next(parametros);
  }
  getDesaparecidos(params: any) {
    return this.http.get(this.apiUrlBase + 'aberto/filtro', { params });
  }

  salvaInfoDesaparecido(id: string, params: any) {
    return this.http.post(this.apiUrlBase + id , { params });
  }
  getDetalhes(id: string) {
    return this.http.get(this.apiUrlBase + id);
  }
}
