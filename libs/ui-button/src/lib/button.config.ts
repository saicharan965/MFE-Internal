export class ButtonConfig {
    label: string | undefined;
    isDisabled: boolean | undefined
    type:string 
    click?: () => any;
    constructor(data: { label :string, click:()=> any, isDisabled:boolean, type:string}) {
      debugger;
      this.label = data.label;
      this.click = data.click
      this.isDisabled = data.isDisabled
      this.type = data.type
    }
  }