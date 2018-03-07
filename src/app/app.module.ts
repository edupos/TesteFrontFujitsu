import { RouterModule } from '@angular/router';
import { Gb } from './globals';
import { PedidosService } from './pedidos/pedidos.service';
import { PedidoListarComponent } from './pedidos/pedidos.listar.component';
import { ProdutoListarComponent } from './produtos/produtos.listar.component';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routing.module';
import { ProdutoDetalheComponent } from './produtos/produtos.detalhe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { DialogQuantidade } from './produtos/produtos.listar.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ProdutoService } from './produtos/produtos.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DialogQuantidade,
    ProdutoDetalheComponent,
    ProdutoListarComponent,
    PedidoListarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RoutingModule,
    RouterModule 
  ],
  providers: [ProdutoService, PedidosService, Gb],
  bootstrap: [AppComponent, DialogQuantidade, ProdutoDetalheComponent, ProdutoListarComponent, PedidoListarComponent]
})
export class AppModule { }
