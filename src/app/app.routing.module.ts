import { PedidoListarComponent } from './pedidos/pedidos.listar.component';
import { ProdutoListarComponent } from './produtos/produtos.listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent} from './app.component'
import { ProdutoDetalheComponent} from './produtos/produtos.detalhe.component'
const produtosRoutes: Routes =[
  {
      path : '',
      component: ProdutoListarComponent
  },
  {
      path : 'produto/:id',
      component: ProdutoDetalheComponent
  },
  {
    path : 'pedido',
    component: PedidoListarComponent
  }
]
@NgModule({
    imports: [
        RouterModule.forRoot(produtosRoutes)
    ],
    exports : [RouterModule]
})
export class RoutingModule {}