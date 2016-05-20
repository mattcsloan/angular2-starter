import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SpaceshipsService } from './spaceships.service';
import { Spaceship } from './spaceship.model';

@Component({
  selector: 'sw-spaceships',
  template: require('./spaceships.component.html'),
  styles: [
    require('./spaceships.component.scss')
  ],
  providers: [ SpaceshipsService ]
})
export class SpaceshipsComponent implements OnInit {
  public spaceships$: Observable<Spaceship[]>;

  constructor(private spaceshipsService: SpaceshipsService) { }

  ngOnInit() {
    this.spaceships$ = this.spaceshipsService.getAll();
  }
}
