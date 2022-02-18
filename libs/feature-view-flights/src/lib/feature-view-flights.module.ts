import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { UiInputModule } from 'ariqt-input';
import { UiTableModule } from 'ariqt-table';




@NgModule({
  imports: [CommonModule, UiInputModule, UiTableModule],
  declarations: [
    ViewFlightsComponent
  ],
  exports:[ViewFlightsComponent],
  providers :[DatePipe],
})
export class FeatureViewFlightsModule {}
