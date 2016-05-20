import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StarshipsService } from '../../services';
import { Starship } from '../../models';

@Component({
  selector: 'sw-starships',
  template: require('./starships.component.html'),
  styles: [
    require('./starships.component.scss')
  ],
  providers: [ StarshipsService ]
})
export class StarshipsComponent implements OnInit {
  public starships$: Observable<Starship[]>;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.starships$ = this.starshipsService.getAll();
  }
}
