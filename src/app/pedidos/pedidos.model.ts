import { Produto } from './../produtos/produtos.model';

export class Pedido {
    constructor(
        public id:number,
        public pedidoItemList: PedidoItem[]
    ){}
}

export class PedidoItem {
    constructor(
        public id:number,
        public produto: Produto,
        public qtd : number
    ){}
}