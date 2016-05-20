import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Species } from '../models';

@Injectable()
export class SpeciesService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Species[]> {
    return Observable.of([]);
  }
}
