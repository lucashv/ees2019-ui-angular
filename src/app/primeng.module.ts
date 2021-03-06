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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';

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
    ConfirmDialogModule,
    AutoCompleteModule,
    DialogModule
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
    ConfirmDialogModule,
    AutoCompleteModule,
    DialogModule
  ]
})
export class PrimengModule { }
