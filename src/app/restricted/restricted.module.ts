import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteModule } from './cliente/cliente.module';
import { HomeComponent } from './home/home.component';
import { RestrictedRoutingModule } from './restricted-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RestrictedRoutingModule,
    ClienteModule
  ],
  exports: [
    RestrictedRoutingModule,
    ClienteModule
  ]
})
export class RestrictedModule { }
