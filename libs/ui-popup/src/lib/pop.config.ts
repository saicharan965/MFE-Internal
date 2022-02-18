export class PopUpConfig {
  message: string | undefined;
  showYesButton: boolean | undefined;
  showNoButton: boolean | undefined;
  close?: () => any;
  confirmClick?: () => any;
  popUpTitle: string | undefined;
  constructor(data: {
    popUpTitle: string;
    message: string;
    close: () => any;
    showYesButton: boolean;
    showNoButton: boolean;
    confirmClick: () => any;
  }) {
    debugger;
    this.message = data.message;
    this.close = data.close;
    this.confirmClick = data.confirmClick;
    this.showYesButton = data.showYesButton;
    this.showNoButton = data.showNoButton;
    this.popUpTitle = data.popUpTitle;
  }
}
