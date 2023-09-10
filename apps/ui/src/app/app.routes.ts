import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'current', loadChildren: () => import('./pages/current-weather/current-weather.module').then(m => m.CurrentWeatherModule)},
  { path: '**', redirectTo: 'current', pathMatch: 'full' },
];
