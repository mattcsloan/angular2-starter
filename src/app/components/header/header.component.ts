import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon } from '@angular2-material/icon';

@Component({
  selector: 'sw-header',
  template: require('./header.component.html'),
  styles: [
    require('./header.component.scss')
  ],
  directives: [ MdToolbar, MdIcon ]
})
export class HeaderComponent {
  constructor() { }
}
