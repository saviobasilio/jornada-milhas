import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { UnidadeFederativa } from '../types/unidadeFederativa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private httpClient: HttpClient) { }

  listar() : Observable<UnidadeFederativa[]> {
    if(!this.cache$)
      this.cache$ = this.buscarEstados().pipe(
        shareReplay(1)
      );

      return this.cache$;
  }

  buscarEstados() : Observable<UnidadeFederativa[]>{
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`)
  }
}
