import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Film } from './film.model';

@Injectable()
export class FilmsService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Film[]> {
    return Observable.of([]);
  }
}
