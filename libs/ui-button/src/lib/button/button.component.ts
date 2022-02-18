import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfig } from '../button.config';

@Component({
  selector: 'ariqt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() config: ButtonConfig | undefined;
  label: string | undefined;
  type: string = '';
  constructor() {}

  ngOnInit(): void {
    debugger;
    this.label = this.config?.label;
    this.type = this.config!.type;
  }
  click() {
    if (this.config?.click) this.config?.click();
  }

}
