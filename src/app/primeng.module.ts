import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    CalendarModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }
