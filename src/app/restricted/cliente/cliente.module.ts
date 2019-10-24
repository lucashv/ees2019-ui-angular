import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { PrimengModule } from 'src/app/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class ClienteModule { }
