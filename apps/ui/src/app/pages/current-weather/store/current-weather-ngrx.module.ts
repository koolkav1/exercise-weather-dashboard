import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCurrentWeatherState from './reducers/current-weather-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CurrentWeatherStateEffects } from './effects/current-weather-state.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCurrentWeatherState.currentWeatherStateFeatureKey, fromCurrentWeatherState.reducer),
    EffectsModule.forFeature([CurrentWeatherStateEffects])
  ]
})
export class CurrerntWeatherNgrxModule { }
