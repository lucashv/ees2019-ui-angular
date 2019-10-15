import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  exports: [
    CalendarModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class PrimengModule { }
