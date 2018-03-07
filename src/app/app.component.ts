import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Produto } from './produtos/produtos.model';
import { ProdutoService} from './produtos/produtos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor( ){}
  ngOnInit() : void {
  }
}
  