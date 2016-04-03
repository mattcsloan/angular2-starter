import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <h1>Hello world!</h1>
  `,
  styles: [
    require('./App.scss')
  ]
})
export class App { }
