import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(responseProdutos => {
      this.produtos = responseProdutos;
      console.log(responseProdutos);     
    },    
      error => console.log(error)   
    );
  }
}
