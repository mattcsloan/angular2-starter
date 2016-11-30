import { Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { PageNotFoundComponent } from './components/page-not-found';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
