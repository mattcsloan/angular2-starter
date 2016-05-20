import { Component } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';

// import app wide css here

import { HeaderComponent } from './components/header';
import { NavbarComponent } from './components/navbar';

import { HomeComponent } from './components/home';
import { PlanetsComponent } from './components/planets';
import { SpaceshipsComponent } from './components/spaceships';
import { VehiclesComponent } from './components/vehicles';
import { PeopleComponent } from './components/people';
import { FilmsComponent } from './components/films';
import { SpeciesComponent } from './components/species';

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
  new Route({ path: '/spaceships', component: SpaceshipsComponent }),
  new Route({ path: '/vehicles', component: VehiclesComponent }),
  new Route({ path: '/people', component: PeopleComponent }),
  new Route({ path: '/films', component: FilmsComponent }),
  new Route({ path: '/species', component: SpeciesComponent })
])
export class AppComponent {
  constructor() { }
}
