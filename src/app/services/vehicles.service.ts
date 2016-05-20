import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Vehicle } from '../models';

@Injectable()
export class VehiclesService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Vehicle[]> {
    return Observable.of([]);
  }
}
