import { enableProdMode, NgModuleRef, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createNewHosts } from '@angularclass/hmr';

// global styles
import './main.scss';

// favicon
import './favicon.ico';

import { AppModule } from './app';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};

hmrBootstrap(module, () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
});
