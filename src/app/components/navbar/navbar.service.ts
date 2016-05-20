import { Injectable } from '@angular/core';

import { NavItem } from './navItem.model';

@Injectable()
export class NavbarService {
  constructor() { }

  public getNavItems(): NavItem[] {
    return [
      {
        label: 'Planets',
        link: 'planets'
      },
      {
        label: 'Spaceships',
        link: 'spaceships'
      },
      {
        label: 'Vehicles',
        link: 'vehicles'
      },
      {
        label: 'People',
        link: 'people'
      },
      {
        label: 'Films',
        link: 'films'
      },
      {
        label: 'Species',
        link: 'species'
      }
    ];
  }
}
