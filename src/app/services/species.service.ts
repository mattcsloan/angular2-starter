import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Species, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class SpeciesService {
  private speciesResource = 'species';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Species[]> {
    return this.swapiService.getAll<Species>(this.speciesResource, page)
      .map((collection: SwapiCollection<Species>) => {
        return collection.results;
      });
  }
}
