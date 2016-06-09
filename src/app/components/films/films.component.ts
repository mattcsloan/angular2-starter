import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FilmsService } from '../../services';
import { Film } from '../../models';

@Component({
  selector: 'sw-films',
  template: require('./films.component.html'),
  styles: [
    require('./films.component.scss')
  ],
  providers: [ FilmsService ]
})
export class FilmsComponent implements OnInit {
  public films$: Observable<Film[]>;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.films$ = this.filmsService.getAll();
  }
}
