import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

@NgModule({
    declarations: [PedidoFormComponent, PedidoListComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PrimengModule
    ]
})
export class PedidoModule { }
