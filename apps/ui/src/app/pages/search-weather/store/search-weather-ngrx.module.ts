import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSearchWeather from './reducers/search-weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchWeatherEffects } from './effects/search-weather.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSearchWeather.searchWeatherFeatureKey, fromSearchWeather.reducer),
    EffectsModule.forFeature([SearchWeatherEffects])
  ]
})
export class SearchWeatherNgrxModule { }
