import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Person, SwapiCollection } from '../models';
import { SwapiService } from '../services';

@Injectable()
export class PeopleService {
  private peopleResource = 'people';

  constructor(private swapiService: SwapiService) { }

  public getAll(page: number = 1): Observable<Person[]> {
    return this.swapiService.getAll<Person>(this.peopleResource, page)
      .map((collection: SwapiCollection<Person>) => {
        return collection.results;
      });
  }
}
