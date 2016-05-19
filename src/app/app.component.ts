import { Component } from '@angular/core';

// import app wide css here

import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'sw-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ],
  directives: [ PeopleComponent ]
})
export class AppComponent {
  constructor() { }
}
