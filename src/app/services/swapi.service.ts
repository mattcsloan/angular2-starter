import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { SwapiCollection, SwapiEntity } from '../models';

@Injectable()
export class SwapiService {
  private swapiUrl: string = 'https://swapi.co/api/';

  constructor(private http: Http) { }

  public getAll<T extends SwapiEntity>(resource: string, page: number): Observable<SwapiCollection<T>> {
    return this.http.get(this.getCollectionUrl(resource, page))
      .map((response: Response) => {
        return <SwapiCollection<T>>response.json();
      });
  }

  public get<T extends SwapiEntity>(resource: string, id: number): Observable<T> {
    return this.http.get(this.getEntityUrl(resource, id))
      .map((response: Response) => {
        return <T>response.json();
      });
  }

  private getCollectionUrl(resource: string, page: number): string {
    return `${this.swapiUrl}${resource}?page=${page}`;
  }

  private getEntityUrl(resource: string, id: number): string {
    return `${this.swapiUrl}${resource}/${id}`;
  }
}
