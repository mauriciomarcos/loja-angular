import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent{
  public contador: number = 0;
  public urlImagem: string = "";
  public nome: string = "";

  public adicionarClick(){
    if (this.contador == 10){
      this.contador = 0;
    }else{
      this.contador++;
      this.exibirImagem();
    }    
  }

  public keyUp(event: any){
     this.nome = event.target.value;
  }

  public exibirImagem(){
    if (this.contador == 5){
      this.urlImagem = "https://cdn.royaleapi.com/static/img/cards-150/skeletons.png?t=7d40adfb80842e0c179f001413c5511c81199b39";
    }else{
      this.urlImagem = "";
    }
  }
}
