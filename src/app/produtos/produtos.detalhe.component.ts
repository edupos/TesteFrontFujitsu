import { Gb } from './../globals';
import { Produto } from './produtos.model';
import { ProdutoService } from './produtos.service';
import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WSAESTALE } from 'constants';

@Component({
  selector: 'produto-detalhe',
  templateUrl: './produtos.detalhe.component.html',
  styleUrls: ['./produtos.detalhe.component.css']
})
export class ProdutoDetalheComponent  implements OnInit{
  produto : Produto;
  qtd : number;

  constructor(
    private produtoService : ProdutoService,
    private router: Router, 
    private route : ActivatedRoute,
    private location : Location,
    private gb : Gb
  ){}
  
  ngOnInit() : void {
    this.produto = new Produto(0,'','','',0);
    this.qtd = 1;

     this.route.params.forEach((params: Params)=>{
         let id: number = +params['id'];
          if(id) {
            this.produtoService.getProduto(id)
               .then((produto: Produto)=> {
                 console.log(produto);
                 this.produto = produto;
            });
         }
    });
  }

  back() : void {
    this.location.back();
  }

  addProduto(qtd: number) : void {
    if(qtd != null)
    {        
      if(qtd < 1)
      {
        alert('Para comprar escolha a quantidade igual ou superior a 1.');
      }
      else 
      {
        //alert(this.produto.nome + " - QTD: " + qtd);
        //Enviar para pedido via rota
        this.gb.addPedido(this.produto, qtd);
        this.router.navigate(['/pedido']);
      }
    } else {
        alert("Favor preencher a quantidade.");

    }
  }
}