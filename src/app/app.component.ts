import { Component } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';

// import app wide css here

import {
  HeaderComponent,
  NavbarComponent,
  HomeComponent,
  PlanetsComponent,
  StarshipsComponent,
  VehiclesComponent,
  PeopleComponent,
  FilmsComponent,
  SpeciesComponent
} from './components';

@Component({
  selector: 'sw-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ],
  directives: [  ROUTER_DIRECTIVES, HeaderComponent, NavbarComponent ]
})
@Routes([
  new Route({ path: '/', component: HomeComponent }),
  new Route({ path: '/planets', component: PlanetsComponent }),
  new Route({ path: '/starships', component: StarshipsComponent }),
  new Route({ path: '/vehicles', component: VehiclesComponent }),
  new Route({ path: '/people', component: PeopleComponent }),
  new Route({ path: '/films', component: FilmsComponent }),
  new Route({ path: '/species', component: SpeciesComponent })
])
export class AppComponent {
  constructor() { }
}
