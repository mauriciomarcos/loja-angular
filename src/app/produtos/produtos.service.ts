import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutosService {
  
  constructor(private http: HttpClient){ }
  protected UrlServiceV1: string = "http://demo0961406.mockable.io/";

  obterProdutos() : Observable<Produto[]>{
    return this.http.get<Produto[]>(this.UrlServiceV1 + "angular-produtos");
  }
}
