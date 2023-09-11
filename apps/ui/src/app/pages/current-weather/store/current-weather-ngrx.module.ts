import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';
import * as fromCurrentWeatherState from './reducers/current-weather-state.index.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CurrentWeatherStateEffects } from './effects/current-weather-state.effects';
import { WeatherService } from '../../../services/weather.service';



@NgModule({
  declarations: [],
  providers: [WeatherService],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCurrentWeatherState.currentWeatherStateFeatureKey, fromCurrentWeatherState.reducers),
    EffectsModule.forFeature([CurrentWeatherStateEffects])
  ]
})
export class CurrerntWeatherNgrxModule { }
