import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Film } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class FilmsService {
  private filmsUrl = 'https://swapi.co/api/films';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Film[]> {
    return this.http.get(`${this.filmsUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Film> = res.json();
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
