import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewFlightsComponent } from '@ariqt/feature-view-flights';
import { NgxPaginationModule } from 'ngx-pagination';

const ROUTES : Routes = [
  {path: '', component : ViewFlightsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES), NgxPaginationModule
  ],
  providers :[DatePipe],
})
export class ViewFlightsModule { }
