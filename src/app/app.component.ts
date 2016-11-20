import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  test() {
    return 4;
  }

  async testAsync() {
    return await Promise.resolve(4);
  }
}

// test tree shake
const someFunc: any = () => 'treeshake!';

export {
  AppComponent,
  someFunc
};

