import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ButtonConfig } from 'ariqt-button';
import { PopUpConfig } from '../pop.config';
@Component({
  selector: 'ariqt-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements AfterViewInit {
  @Input() config: PopUpConfig | undefined;
  @ViewChild('openModal') openModal: ElementRef | undefined;
  closeButtonConfig: ButtonConfig | undefined;
  YesButtonConfig: ButtonConfig | undefined;

  constructor() {
    this.setButtonConfigs();
  }


  ngAfterViewInit(): void {
    this.openModal?.nativeElement.click();
  }

  close() {
    debugger;
    if (this.config?.close) this.config?.close();
  }

  Submit() {
    if (this.config?.confirmClick) this.config?.confirmClick();
  }

  setButtonConfigs() {
    this.closeButtonConfig = new ButtonConfig({
      label: 'close',
      click: () => this.close(),
      isDisabled: false,
      type: 'btn btn-secondary',
    });
    this.YesButtonConfig = new ButtonConfig({
      label: 'Add Flight',
      click: () => this.Submit(),
      isDisabled: false,
      type: 'btn btn-primary',
    });
  }
}
