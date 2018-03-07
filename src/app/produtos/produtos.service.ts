import {Produto} from './produtos.model'
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProdutoService{
   // app é a pasta de onde fizermos a chamada
   // produtos é o nome da variável na classe InMemoryDataService
   private produtosUrl : string = 'app/produtos';
   private headers: Headers = new Headers ({'Content-Type' : 'application/json'})
   constructor(
      private http: Http
   ) {}


    getProdutos() : Promise<Produto[]>  {
        return this.http.get(this.produtosUrl) 
        .toPromise()
        .then(response => response.json().data as Produto[])
        .catch(this.trataErro);
    }

    private trataErro(err : any) : Promise<any> {
        console.log('Erro : ' , err );
        return Promise.reject(err.message || err );
      }

    getProduto(id:number): Promise<Produto> {
        return this.getProdutos()
        .then((produtos: Produto[]) => produtos.find(produto => produto.id === id)); 
       }

    searchProdutos(search:string): Promise<Produto[]> {
    return this.getProdutos()
    .then((produtos: Produto[]) => produtos.filter(produto => produto.nome.toUpperCase().indexOf(search.toUpperCase()) >= 0)); 
    }

    create(produto: Produto): Promise<Produto> {
        return this.http.post(this.produtosUrl, JSON.stringify(produto), {headers:this.headers})
        .toPromise()
        .then((response : Response) => {
            console.log(response.json().data);
            return response.json().data as Produto;  
        })
        .catch(this.trataErro);
    }

    update(produto: Produto): Promise<Produto> {
        const url = `${this.produtosUrl}/${produto.id}`; //app/produto/:id
        return this.http
        .put(url, JSON.stringify(produto), {headers:this.headers})
        .toPromise()
        .then(() => produto as Produto)  
        .catch(this.trataErro);
    }

    delete(produto: Produto): Promise<Produto> {
        const url = `${this.produtosUrl}/${produto.id}`; //app/produto/:id
        return this.http
        .delete(url, {headers:this.headers})
        .toPromise()
        .then(() => produto as Produto)  
        .catch(this.trataErro);
    }
}