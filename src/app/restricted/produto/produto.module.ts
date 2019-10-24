import { NgModule } from '@angular/core';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';

@NgModule({
    declarations: [ProdutoListComponent, ProdutoFormComponent],
    imports: [
        ReactiveFormsModule,
        PrimengModule
    ]
})
export class ProdutoModule { }
