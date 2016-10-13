import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  test() {
    return 4;
  }

  async testAsync() {
    return await Promise.resolve(4);
  }
}
