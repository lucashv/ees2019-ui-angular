import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
  declarations: [ClienteListComponent, ClienteFormComponent],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
