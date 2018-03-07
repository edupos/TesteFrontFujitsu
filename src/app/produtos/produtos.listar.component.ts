import { Gb } from './../globals';
import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Produto } from './produtos.model';
import { ProdutoService} from './produtos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'produto-listar',
  templateUrl: './produtos.listar.component.html',
  styleUrls: ['./produtos.listar.component.css']
})
export class ProdutoListarComponent  implements OnInit{
  pesquisar : Produto;
  produtos : Produto[] ;
  constructor(
      private produtoService : ProdutoService,
      public dialog: MatDialog,
      private router: Router,
      private gb: Gb    
  ){}

  filterProduto() : Produto[] {
    let produtosFilter: Produto[];   
    //this.pesquisar.nome  = '';
    
    if(this.pesquisar.nome != '')
    {
      this.produtoService.searchProdutos(this.pesquisar.nome)
      .then((produtos : Produto[]) => {
        this.produtos = produtos;
      }).catch(err => console.log(err));
    } else {
      this.produtoService.getProdutos()
      .then((produtos : Produto[]) => {
        this.produtos = produtos;
       }).catch(err => console.log(err));
    }
    return produtosFilter;
  }

  ngOnInit() : void {
    this.pesquisar = new Produto(0,'','','',0);
    this.produtoService.getProdutos()
    .then((produtos : Produto[]) => {
      this.produtos = produtos;
     }).catch(err => console.log(err));
  }

  openDialog(produtoSel : Produto): void {
    let qtd : number;
    qtd = 1;
    let dialogRef = this.dialog.open(DialogQuantidade, {
      width: '350px',
      data: { produtoSel: produtoSel.nome, qtd: qtd  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let qtd = result;
      if(qtd != null)
      {        
        if(qtd < 1)
        {
          alert('Para comprar escolha a quantidade igual ou superior a 1.');
        }
        else 
        {
          //alert(produtoSel.nome + " - QTD: " + qtd);
          //Enviar para pedido via rota
          this.gb.addPedido(produtoSel, qtd);
          this.router.navigate(['/pedido']);
        }
      }
    });
  }

}
  
@Component({
  selector: 'dialog-quantidade',
  templateUrl: '../app.quantidade.dialog.html'
})
export class DialogQuantidade {

  constructor(
    public dialogRef: MatDialogRef<DialogQuantidade>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}