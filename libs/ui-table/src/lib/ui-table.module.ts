import { UtilModule } from 'ariqt-sort';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [CommonModule, NgxPaginationModule,UtilModule],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
})
export class UiTableModule {}
