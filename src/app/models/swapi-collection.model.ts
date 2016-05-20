import { SwapiEntity } from './swapi-entity.model';

export class SwapiCollection<T extends SwapiEntity> {
  public count: number;
  public next: string;
  public previous: string;
  public results: T[];
}
