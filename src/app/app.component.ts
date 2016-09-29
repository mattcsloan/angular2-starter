import { Component, OnInit } from '@angular/core';

import {
  HomeComponent,
  PlanetsComponent,
  StarshipsComponent,
  VehiclesComponent,
  PeopleComponent,
  FilmsComponent,
  SpeciesComponent
} from './components';

import { SwapiService, NavbarService } from './services';
import { NavItem } from './models';

@Component({
  selector: 'sw-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ],
  providers: [ SwapiService, NavbarService ]
})
export class AppComponent implements OnInit {
  public navItems: NavItem[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navItems = this.navbarService.getNavItems();
  }
}