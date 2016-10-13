/// <reference path="../../node_modules/@types/protractor/index.d.ts" />

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('my-app h2')).getText();
  }
}
