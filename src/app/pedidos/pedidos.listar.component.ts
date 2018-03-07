import { Gb } from './../globals';
import { Router, ActivatedRoute } from '@angular/router';
import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Pedido, PedidoItem } from './pedidos.model';
import { PedidosService} from './pedidos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Location } from '@angular/common';
import {MatTableDataSource} from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({ 
  moduleId: module.id,
  selector: 'pedido-listar',
  templateUrl: './pedidos.listar.component.html',
  styleUrls: ['./pedidos.listar.component.css']
})
export class PedidoListarComponent  implements OnInit{
  pedido : Pedido;
  displayedColumns = ['Produto', 'Quantidade', 'Total', 'Excluir'];

    sumTotal() : number {
        let sumVar:number = 0;
        for(let i = 0; i < this.pedido.pedidoItemList.length; i++)
        {
            sumVar += (this.pedido.pedidoItemList[i].produto.valor * this.pedido.pedidoItemList[i].qtd);
        }
        
        return sumVar;
    }

  constructor(
      private pedidosService : PedidosService,
      public dialog: MatDialog,
      private router: Router, 
      private route : ActivatedRoute,
      private location : Location,
      private gb : Gb      
  ){}

  ngOnInit() : void {
    if(this.gb.pedido != null)
    {
        this.pedido = this.gb.pedido;
    } else {
        this.pedido = new Pedido(0, new Array<PedidoItem>());
    }
    //this.dataSource = new MatTableDataSource(this.pedido.pedidoItemList);
    
  }
  getDatasorce() : MatTableDataSource<PedidoItem> {
    if(this.gb.pedido != null)
    {
        this.pedido = this.gb.pedido;
    } else {
        this.pedido = new Pedido(0, new Array<PedidoItem>());
    }
    return new MatTableDataSource(this.pedido.pedidoItemList);
  }
  
  back() : void {
    //this.location.back();
    this.router.navigate(['']);
  }

  deleteItem(element:PedidoItem){
        var index = this.pedido.pedidoItemList.indexOf(element, 0);
        if (index > -1) {
            this.pedido.pedidoItemList.splice(index, 1);
         }
        
        this.gb.pedido = this.pedido;
  }

  finalizarCompra() {
      if(this.pedido.pedidoItemList.length <= 0)
      {
          alert("Você precisa adicionar itens ao carrinho antes de finalizar a compra.")
      } else {
          if(confirm("Deseja realmente realizar a compra?"))
          {
              alert("Compra realizada com sucesso!");
              this.pedido = new Pedido(0, new Array<PedidoItem>());
              this.gb.pedido = this.pedido;
              this.router.navigate(['']);
          }
      }
  }
}
