import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Species } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class SpeciesService {
  private speciesUrl = 'https://swapi.co/api/species';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Species[]> {
    return this.http.get(`${this.speciesUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Species> = res.json();
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
