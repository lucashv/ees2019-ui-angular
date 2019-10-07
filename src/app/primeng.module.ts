import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    TableModule
  ],
  exports: [
    CalendarModule
  ]
})
export class PrimengModule { }
