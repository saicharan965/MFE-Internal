import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TableConfig } from '../table.config';

@Component({
  selector: 'ariqt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit,OnChanges {
  @Input() config: TableConfig<any> | undefined;
  tableHeaders: string[] | undefined;
  tableData: any[] | undefined;
  canShow: boolean = false;
  p: number = 1;

  ngOnInit(): void {
    debugger;
    this.SetTableDetails();
  }

  ngOnChanges(): void {
    this.config = this.config;
    this.p = 1;
    this.SetTableDetails();
  }

  SetTableDetails() {
    if (this.config?.tableDetails)
      if (this.config?.tableDetails.length > 0) {
        this.tableHeaders = Object.keys(this.config?.tableDetails[0]);
        this.tableData = this.config?.tableDetails;
      } else {
        this.tableHeaders = undefined;
      }
    this.canShow = true;
  }

  pageChanged(event: any) {
    debugger;
    this.p = event;
  }
}
