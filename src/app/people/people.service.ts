import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs';

import { Person } from './person.model';

@Injectable()
export class PeopleService {
  constructor() { }

  // TODO: replace w/ http
  public getAll(): Observable<Person[]> {
    return Observable.of([
      {
        birth_year: '19 BBY',
        eye_color: 'Blue',
        films: [
          'http://swapi.co/api/films/1/'
        ],
        gender: 'Male',
        hair_color: 'Blond',
        height: '172',
        homeworld: 'http://swapi.co/api/planets/1/',
        mass: '77',
        name: 'Luke Skywalker',
        skin_color: 'Fair',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',
        species: [
          'http://swapi.co/api/species/1/'
        ],
        starships: [
          'http://swapi.co/api/starships/12/'
        ],
        url: 'http://swapi.co/api/people/1/',
        vehicles: [
          'http://swapi.co/api/vehicles/14/'
        ]
      },
      {
        birth_year: '19 BBY',
        eye_color: 'Blue',
        films: [
          'http://swapi.co/api/films/1/'
        ],
        gender: 'Male',
        hair_color: 'Blond',
        height: '172',
        homeworld: 'http://swapi.co/api/planets/1/',
        mass: '77',
        name: 'Luke Skywalker',
        skin_color: 'Fair',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',
        species: [
          'http://swapi.co/api/species/1/'
        ],
        starships: [
          'http://swapi.co/api/starships/12/'
        ],
        url: 'http://swapi.co/api/people/1/',
        vehicles: [
          'http://swapi.co/api/vehicles/14/'
        ]
      }
    ]);
  }
}
