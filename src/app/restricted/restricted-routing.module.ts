import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

const restrictedRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            { path: 'cliente', component: ClienteListComponent },
            { path: 'cliente/form', component: ClienteFormComponent },
            { path: 'cliente/form/:id', component: ClienteFormComponent },
            { path: 'produto', component: ProdutoListComponent },
            { path: 'produto/form', component: ProdutoFormComponent },
            { path: 'produto/form/:id', component: ProdutoFormComponent },
            { path: 'pedido', component: PedidoListComponent },
            { path: 'pedido/form', component: PedidoFormComponent },
            { path: '**', redirectTo: 'pedido' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(restrictedRoutes)
    ],
    exports: [RouterModule]
})
export class RestrictedRoutingModule { }
