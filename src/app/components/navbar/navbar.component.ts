import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarService } from '../../services';
import { NavItem } from '../../models';

@Component({
  selector: 'sw-navbar',
  template: require('./navbar.component.html'),
  styles: [
    require('./navbar.component.scss')
  ],
  providers: [ NavbarService ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent implements OnInit {
  public navItems: NavItem[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navItems = this.navbarService.getNavItems();
  }
}
