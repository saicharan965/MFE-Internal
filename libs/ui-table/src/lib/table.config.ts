export class TableConfig<TType> {
  tableDetails: TType[];

  constructor(data: { tableDetails: TType[] }) {
    debugger;
    this.tableDetails = data.tableDetails;
  }
}
