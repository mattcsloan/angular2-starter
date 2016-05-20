import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Vehicle } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class VehiclesService {
  private vehiclesUrl = 'https://swapi.co/api/vehicles';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Vehicle[]> {
    return this.http.get(`${this.vehiclesUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Vehicle> = res.json();
        return body.results;
      })
      .catch((error: any) => {
        const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` :
          'Server Error';
        console.error(errMsg);
        return Observable.throw(errMsg);
      });
  }
}
