import { Injectable } from '@angular/core';

import { NavItem } from '../models';

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
        label: 'Starships',
        link: 'starships'
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
