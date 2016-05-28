import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Film, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class FilmsService {
  private filmsResource: string = 'films';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Film[]> {
    return this.swapiService.getAll<Film>(this.filmsResource, page)
      .map((collection: SwapiCollection<Film>) => {
        return collection.results;
      });
  }
}
