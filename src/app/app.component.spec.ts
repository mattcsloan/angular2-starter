import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEachProviders(() => [
    AppComponent
  ]);

  it('should work', inject([AppComponent], (app: AppComponent) => {
    // real tests here
    expect(2).toBe(2);
  }));
});
