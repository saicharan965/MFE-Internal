import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input.config';


@Component({
  selector: 'ariqt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() config: InputConfig | undefined;
  searchString : string | undefined;
  constructor() {}

  ngOnInit(): void {}

  change() {
    debugger;
    sessionStorage.setItem("searchString",this.searchString!);
    if (this.config?.change) this.config?.change();
  }
}
