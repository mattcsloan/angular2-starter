import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {
  HomeComponent,
  PlanetsComponent,
  StarshipsComponent,
  VehiclesComponent,
  PeopleComponent,
  FilmsComponent,
  SpeciesComponent,
  PageNotFoundComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    StarshipsComponent,
    VehiclesComponent,
    PeopleComponent,
    FilmsComponent,
    SpeciesComponent,
    PageNotFoundComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
