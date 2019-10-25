import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteModule } from './cliente/cliente.module';
import { HomeComponent } from './home/home.component';
import { RestrictedRoutingModule } from './restricted-routing.module';
import { PrimengModule } from '../primeng.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    RestrictedRoutingModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule
  ],
  exports: [
    PrimengModule,
    RestrictedRoutingModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule
  ]
})
export class RestrictedModule { }
