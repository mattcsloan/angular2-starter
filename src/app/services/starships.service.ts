import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Starship, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class StarshipsService {
  private starshipsResource: string = 'starships';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Starship[]> {
    return this.swapiService.getAll<Starship>(this.starshipsResource, page)
      .map((collection: SwapiCollection<Starship>) => {
        return collection.results;
      });
  }
}
