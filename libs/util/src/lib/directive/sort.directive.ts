import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[inputObject]'
})
export class SortDirectivee {
  @Input() inputObject: Array<any> | undefined;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
      debugger;
     
    // Create Object of Sort Class
    const sort = new Sort();
    // Get Reference Of Current Clicked Element
    const elem = this.targetElem.nativeElement;
    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute("data-order");
    // Get The Property Type specially set [data-type=date] if it is date field
    const type = elem.getAttribute("data-type");
    // Get The Property Name from Element Attribute
    const property = elem.innerHTML.trim();
    // Get The Property Name from Element Attribute
    const property2 = elem.getAttribute("data-object");
    if (order === "desc") {
      this.inputObject?.sort(sort.startSort(property, order, type,property2));
      elem.setAttribute("data-order", "asc");
    }
    else {
      this.inputObject?.sort(sort.startSort(property, order, type,property2));
      elem.setAttribute("data-order", "desc");
    }
  }
}
