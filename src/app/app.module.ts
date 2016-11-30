import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { rootReducer } from './reducers';

import { HomeComponent } from './components/home';
import { PageNotFoundComponent } from './components/page-not-found';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.provideStore(rootReducer)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
