import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'current', loadChildren: () => import('./pages/current-weather/current-weather.module').then(m => m.CurrentWeatherModule)},
  { path: 'forecast', loadChildren: () => import('./pages/search-weather/search-weather.module').then(m => m.SearchWeatherModule)},
  { path: '**', redirectTo: 'current', pathMatch: 'full' },
];
