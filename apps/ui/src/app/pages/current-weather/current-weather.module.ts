import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrerntWeatherNgrxModule } from './store/current-weather-ngrx.module';
import { CurrentWeatherComponent } from './current-weather.component';
import { CardModule } from '../../components/card/card.module';
import { RouterModule, Routes } from '@angular/router';
import { loadCurrentWeatherResolver } from './resolvers/load-current-weather.resolver';

const routes: Routes = [
  {
    path: '',
    component: CurrentWeatherComponent,
    resolve: {
      currentWeatherData: loadCurrentWeatherResolver,
    },
  },
];
@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [
    CommonModule,
    CurrerntWeatherNgrxModule,
    CardModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CurrentWeatherModule {}
