import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { App } from './components/App';

declare const __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
}

bootstrap(App);
