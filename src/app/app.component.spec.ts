import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect,
} from '@angular/core/testing';

import {
  provide
} from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarService } from './services';

describe('App', () => {
  beforeEachProviders(() => [
    AppComponent,
    provide(NavbarService, { useClass: NavbarService })
  ]);

  it('should work', inject([AppComponent], (app: AppComponent) => {
    // real tests here
    expect(2).toBe(2);
  }));
});
