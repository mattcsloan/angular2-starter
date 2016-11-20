import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
class AppComponent {
  public test() {
    return 4;
  }

  public async testAsync() {
    return await Promise.resolve(4);
  }
}

// test tree shake
const someFunc: any = () => 'treeshake!';

export {
  AppComponent,
  someFunc
};
