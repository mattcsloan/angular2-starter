import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from '@angular2-material/icon';

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

import { SwapiService, NavbarService } from './services';
import { NavItem } from './models';

@Component({
  selector: 'sw-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdButton,
    MdToolbar,
    MdIcon
  ],
  providers: [ SwapiService, NavbarService ]
})
@RouteConfig([
  { name: 'Home', path: '/', component: HomeComponent, useAsDefault: true },
  { name: 'Planets', path: '/planets', component: PlanetsComponent },
  { name: 'Starships', path: '/starships', component: StarshipsComponent },
  { name: 'Vehicles', path: '/vehicles', component: VehiclesComponent },
  { name: 'People', path: '/people', component: PeopleComponent },
  { name: 'Films', path: '/films', component: FilmsComponent },
  { name: 'Species', path: '/species', component: SpeciesComponent }
])
export class AppComponent implements OnInit {
  public navItems: NavItem[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navItems = this.navbarService.getNavItems();
  }
}
