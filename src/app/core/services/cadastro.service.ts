import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

   }

   enviar(pessoaUsuaria: PessoaUsuaria) : Observable<PessoaUsuaria> {
    return this.httpClient.post<PessoaUsuaria>(`${this.apiUrl}\auth/cadastro`, pessoaUsuaria)
   }
}
