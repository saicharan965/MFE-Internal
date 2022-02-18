import { SortDirectivee } from './directive/sort.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations:[SortDirectivee],
  exports:[SortDirectivee],

})
export class UtilModule {}
