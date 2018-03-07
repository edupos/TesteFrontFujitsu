import { Produto } from './produtos/produtos.model';
import { Pedido, PedidoItem } from './pedidos/pedidos.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class Gb {
    ///Variaveis
    public pedido : Pedido;


    addPedido(produto:Produto, qtd : number) : void {
        if(this.pedido == null)
        {
            this.pedido = new Pedido(0, null);
            this.pedido.pedidoItemList = new Array<PedidoItem>();
        }

        let item : PedidoItem;
        item = new PedidoItem(0,null,0);
        item.produto = produto;
        item.qtd = qtd;
        this.pedido.pedidoItemList.splice(this.pedido.pedidoItemList.length,0,item);
    }

}