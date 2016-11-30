import { Component } from '@angular/core';

const template = process.env.NODE_ENV === 'production' ?
                 '' :
                 `<ngrx-store-log-monitor
                    toggleCommand="ctrl-h"
                    positionCommand="ctrl-q"
                  ></ngrx-store-log-monitor>`;

@Component({
  selector: 'my-dev-tools',
  template
})
export class DevToolsComponent {
  public test() {
    return 4;
  }
}
