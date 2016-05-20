import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from '../models';

@Injectable()
export class PlanetsService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Planet[]> {
    return Observable.of([]);
  }
}
