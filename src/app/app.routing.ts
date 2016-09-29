import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  PlanetsComponent,
  StarshipsComponent,
  VehiclesComponent,
  PeopleComponent,
  FilmsComponent,
  SpeciesComponent,
  PageNotFoundComponent
} from './components';

const appRoutes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);