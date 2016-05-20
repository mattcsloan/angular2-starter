import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Person } from '../models';
import { SwapiCollection } from '../models';

@Injectable()
export class PeopleService {
  private peopleUrl = 'https://swapi.co/api/people';

  constructor(private http: Http) { }

  public getAll(page: number = 1): Observable<Person[]> {
    return this.http.get(`${this.peopleUrl}?page=${page}`)
      .map((res: Response) => {
        const body: SwapiCollection<Person> = res.json();
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
