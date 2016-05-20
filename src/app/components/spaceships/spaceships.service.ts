import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Spaceship } from './spaceship.model';

@Injectable()
export class SpaceshipsService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Spaceship[]> {
    return Observable.of([]);
  }
}
