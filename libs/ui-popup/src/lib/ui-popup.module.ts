import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { UiButtonModule } from 'ariqt-button'
@NgModule({
  imports: [CommonModule,UiButtonModule],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent
  ],
})
export class UiPopupModule {}
