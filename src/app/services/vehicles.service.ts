import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Vehicle, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class VehiclesService {
  private vehiclesResource: string = 'vehicles';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Vehicle[]> {
    return this.swapiService.getAll<Vehicle>(this.vehiclesResource, page)
      .map((collection: SwapiCollection<Vehicle>) => {
        return collection.results;
      });
  }
}
