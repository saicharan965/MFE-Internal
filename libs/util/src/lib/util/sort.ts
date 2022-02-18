export class Sort {
    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  
    constructor() {}
  
    public startSort(property: string, order: any, type = '', property2: any) {
        debugger;
      if (order === 'desc') {
        this.sortOrder = -1;
      }
      return (a: any, b: any) => {
        if (property2 !== null) {
          if (type === 'date') {
            if (a[property] === undefined) a[property] = a[property2];
            if (b[property] === undefined) b[property] = b[property2];
            return this.sortData(new Date(a[property]), new Date(b[property]));
          } else {
            return this.sortData(a[property][property2], b[property][property2]);
          }
        } else {
          if (type === 'date') {
            if (a[property] === undefined) a[property] = a.createdOn;
            if (b[property] === undefined) b[property] = b.createdOn;
            return this.sortData(new Date(a[property]), new Date(b[property]));
          } else {
            return (
              this.collator.compare(a[property], b[property]) * this.sortOrder
            );
          }
        }
      };
    }
  
    private sortData(a: any, b: any): any {
      if (a < b) {
        return -1 * this.sortOrder;
      } else if (a > b) {
        return 1 * this.sortOrder;
      } else {
        return 0 * this.sortOrder;
      }
    }
  
    // private sortDate(a: any, b: any): any {
    //   if (a === undefined && b === undefined) return 0 * this.sortOrder;
    //   else {
    //     if (a === undefined) return -1 * this.sortOrder;
    //     else return 1 * this.sortOrder;
    //   }
    // }
  
    private sortDate(a: any, b: any, property: any): any {
      if (property === 'updatedOn') {
        if (a[property] === undefined) a = a.createdOn;
        if (b[property] === undefined) b = b.createdOn;
      }
      return this.sortData(new Date(a), new Date(b));
    }
  }
  