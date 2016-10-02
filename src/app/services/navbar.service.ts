import { Injectable } from '@angular/core';

import { NavItem } from '../models';

@Injectable()
export class NavbarService {
  constructor() { }

  public getNavItems(): NavItem[] {
    return [
      {
        label: 'Planets',
        path: '/planets'
      },
      {
        label: 'Starships',
        path: '/starships'
      },
      {
        label: 'Vehicles',
        path: '/vehicles'
      },
      {
        label: 'People',
        path: '/people'
      },
      {
        label: 'Films',
        path: '/films'
      },
      {
        label: 'Species',
        path: '/species'
      }
    ];
  }
}
