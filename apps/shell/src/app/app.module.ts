import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { UiLoaderModule } from 'ariqt-loader';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'viewFlights',
    loadChildren: () =>
      import('viewFlights/Module').then((m) => m.ViewFlightsModule),
  },
  {
    path: 'addFlights',
    loadChildren: () =>
      import('addFlights/Module').then((m) => m.NewFlightModule),
  },
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    UiLoaderModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
