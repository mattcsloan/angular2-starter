import { SwapiEntity } from './swapi-entity.model';

export class Film extends SwapiEntity {
  public title: string;
  public episode_id: string;
  public opening_crawl: string;
  public director: string;
  public producer: string;
  public release_date: string;
  public characters: string[];
  public planets: string[];
  public starships: string[];
  public vehicles: string[];
  public species: string[];
}
