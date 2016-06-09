import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SpeciesService } from '../../services';
import { Species } from '../../models';

@Component({
  selector: 'sw-species',
  template: require('./species.component.html'),
  styles: [
    require('./species.component.scss')
  ],
  providers: [ SpeciesService ]
})
export class SpeciesComponent implements OnInit {
  public species$: Observable<Species[]>;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.species$ = this.speciesService.getAll();
  }
}
