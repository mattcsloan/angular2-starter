import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PeopleService } from '../../services';
import { Person } from '../../models';

@Component({
  selector: 'sw-people',
  template: require('./people.component.html'),
  styles: [
    require('./people.component.scss')
  ],
  providers: [ PeopleService ]
})
export class PeopleComponent implements OnInit {
  public people$: Observable<Person[]>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people$ = this.peopleService.getAll();
  }
}
