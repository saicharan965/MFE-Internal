import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flight, FlightDataService } from '@ariqt/data-flight';
import { DatePipe } from '@angular/common';
import { TableConfig } from 'ariqt-table';
import { InputConfig } from 'ariqt-input';
@Component({
  selector: 'ariqt-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.scss'],
})
export class ViewFlightsComponent implements OnInit {
  today: Date = new Date();
  tableData$: Subscription | undefined;
  tableData: Flight[] | undefined;
  filteredtableData: Flight[] | undefined;
  config: TableConfig<Flight> | undefined;
  inputConfig: InputConfig | undefined;

  constructor(
    private _apiData: FlightDataService,
    private _datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    debugger;
    this.tableData$ = this._apiData.loadFlights().subscribe((data) => {
      this.tableData = data;
      this.filteredtableData = data;
      this.ChnageDateFormat();
      this.SetTableConfig();
      this.inputConfig = new InputConfig({
        label: 'Search by Id',
        change: () => this.SearchById(),
      });
    });
  }

  SetTableConfig() {
    if (this.filteredtableData)
      this.config = new TableConfig<Flight>({
        tableDetails: this.filteredtableData,
      });
  }

  SearchById() {
    debugger;
    const id = Number(sessionStorage.getItem('searchString'));
    const checkNan = isNaN(id)
    if (checkNan) {
      this.filteredtableData = [];
    } else {
      if (id) {
        this.filteredtableData = this.tableData?.filter((x) => {
          if (x.id.toString().includes(id.toString())) return true;
          else return false;
        });
        console.log(this.filteredtableData);
      } else {
        this.filteredtableData = this.tableData;
      }
    }
    console.log(this.filteredtableData);

    this.SetTableConfig();
  }

  ChnageDateFormat() {
    this.tableData?.forEach(
      (x) => (x.date = this._datePipe.transform(x.date, 'yyyy-MM-dd')!)
    );
    this.filteredtableData?.forEach(
      (x) => (x.date = this._datePipe.transform(x.date, 'yyyy-MM-dd')!)
    );
  }

  ngOnDestroy() {
    this.tableData$?.unsubscribe();
  }
}
