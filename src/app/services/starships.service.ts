import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Starship } from '../models';

@Injectable()
export class StarshipsService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Starship[]> {
    return Observable.of([]);
  }
}
