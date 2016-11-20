import { browser, element, by } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getHeaderText() {
    return element(by.css('my-app h2')).getText();
  }
}
