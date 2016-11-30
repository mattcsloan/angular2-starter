import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { rootReducer } from './reducers';

import { DevToolsComponent } from './components/dev-tools';
import { HomeComponent } from './components/home';
import { PageNotFoundComponent } from './components/page-not-found';

let DEV_IMPORTS: any = [];

if (process.env.NODE_ENV !== 'production') {
  DEV_IMPORTS = [
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.provideStore(rootReducer),
    ...DEV_IMPORTS
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DevToolsComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
