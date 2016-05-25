import { Injectable } from '@angular/core';

import { NavItem } from '../models';

@Injectable()
export class NavbarService {
  constructor() { }

  public getNavItems(): NavItem[] {
    return [
      {
        label: 'Planets',
        routeName: 'Planets'
      },
      {
        label: 'Starships',
        routeName: 'Starships'
      },
      {
        label: 'Vehicles',
        routeName: 'Vehicles'
      },
      {
        label: 'People',
        routeName: 'People'
      },
      {
        label: 'Films',
        routeName: 'Films'
      },
      {
        label: 'Species',
        routeName: 'Species'
      }
    ];
  }
}
