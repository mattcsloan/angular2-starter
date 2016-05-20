import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Starship } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class StarshipsService {
  private starshipsUrl = 'https://swapi.co/api/starships';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Starship[]> {
    return this.http.get(`${this.starshipsUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Starship> = res.json();
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
