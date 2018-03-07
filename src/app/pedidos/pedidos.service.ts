import {Pedido, PedidoItem} from './pedidos.model'
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PedidosService{
   // app é a pasta de onde fizermos a chamada
   // produtos é o nome da variável na classe InMemoryDataService
   private produtosUrl : string = 'app/pedidos';
   private headers: Headers = new Headers ({'Content-Type' : 'application/json'})
   constructor(
      private http: Http
   ) {}

}