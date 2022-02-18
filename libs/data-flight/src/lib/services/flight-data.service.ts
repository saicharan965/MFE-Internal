import { Flight } from '../../models/flight.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightDataService {
  constructor() {
    debugger;
  }
  flights: Flight[] = [
    {
      id: 1,
      from: 'Visakapatnam',
      destination: 'Mallorca',
      date: new Date().toISOString(),
    },
    {
      id: 2,
      from: 'Washington',
      destination: 'Barcelona',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      destination: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 4,
      from: 'Visakapatnam',
      destination: 'Tirupathi',
      date: new Date().toISOString(),
    },
    {
      id: 5,
      from: 'Delhi',
      destination: 'Visakapatnam',
      date: new Date().toISOString(),
    },
    {
      id: 6,
      from: 'Barcelona',
      destination: 'Chennai',
      date: new Date().toISOString(),
    },
    {
      id: 7,
      from: 'Delhi',
      destination: 'Singapore',
      date: new Date().toISOString(),
    },
    {
      id: 8,
      from: 'Delhi',
      destination: 'Washington',
      date: new Date().toISOString(),
    },
    {
      id: 9,
      from: 'Paris',
      destination: 'New york',
      date: new Date().toISOString(),
    },
    {
      id: 10,
      from: 'Barcelona',
      destination: 'Paris',
      date: new Date().toISOString(),
    },
    {
      id: 11,
      from: 'Chennai',
      destination: 'Delhi',
      date: new Date().toISOString(),
    },
    {
      id: 12,
      from: 'Chennai',
      destination: 'Tokyo',
      date: new Date().toISOString(),
    },
    {
      id: 13,
      from: 'New york',
      destination: 'Mumbai',
      date: new Date().toISOString(),
    },
    {
      id: 14,
      from: 'Tokyo',
      destination: 'Kolkata',
      date: new Date().toISOString(),
    },
    {
      id: 15,
      from: 'Shimla',
      destination: 'Dhaka',
      date: new Date().toISOString(),
    },
    {
      id: 16,
      from: 'Tokyo',
      destination: 'Shimla',
      date: new Date().toISOString(),
    },
    {
      id: 17,
      from: 'Dhaka',
      destination: 'Ahmedabad',
      date: new Date().toISOString(),
    },
    {
      id: 18,
      from: 'Ahmedabad',
      destination: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 19,
      from: 'Delhi',
      destination: 'Mumbai',
      date: new Date().toISOString(),
    },
    {
      id: 20,
      from: 'Singapore',
      destination: 'Delhi',
      date: new Date().toISOString(),
    },
    {
      id: 21,
      from: 'Delhi',
      destination: 'Singapore',
      date: new Date().toISOString(),
    },
    {
      id: 22,
      from: 'Dhaka',
      destination: 'Shimla',
      date: new Date().toISOString(),
    },
  ];

  loadFlights(): Observable<Flight[]> {
    debugger;
    return of(this.flights);
  }
}
