import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import { MdIconRegistry } from '@angular2-material/icon';

import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  MdIconRegistry
]);
