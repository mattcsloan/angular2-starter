import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class PlanetsService {
  private planetsResource = 'planets';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Planet[]> {
    return this.swapiService.getAll<Planet>(this.planetsResource, page)
      .map((collection: SwapiCollection<Planet>) => {
        return collection.results;
      });
  }
}
