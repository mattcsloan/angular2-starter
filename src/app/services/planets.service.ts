import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Planet } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class PlanetsService {
  private planetsUrl = 'https://swapi.co/api/planets';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Planet[]> {
    return this.http.get(`${this.planetsUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Planet> = res.json();
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
