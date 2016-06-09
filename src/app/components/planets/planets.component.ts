import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlanetsService } from '../../services';
import { Planet } from '../../models';

@Component({
  selector: 'sw-planets',
  template: require('./planets.component.html'),
  styles: [
    require('./planets.component.scss')
  ],
  providers: [ PlanetsService ]
})
export class PlanetsComponent implements OnInit {
  public planets$: Observable<Planet[]>;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.getAll();
  }
}
