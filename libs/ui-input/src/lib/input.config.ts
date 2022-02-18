export class InputConfig {
    label: string | undefined;
    change?: () => any;
    constructor(data: { label :string, change:()=> any}) {
        this.label = data.label;
        this.change = data.change;
    }
  }