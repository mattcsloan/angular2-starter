import { Component } from '@angular/core';

@Component({
  selector: 'sw-home',
  template: require('./home.component.html'),
  styles: [
    require('./home.component.scss')
  ]
})
export class HomeComponent {
  constructor() { }
}