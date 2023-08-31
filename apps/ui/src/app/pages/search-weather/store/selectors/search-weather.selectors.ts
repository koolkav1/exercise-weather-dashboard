import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearchWeather from '../reducers/search-weather.reducer';

export const selectSearchWeatherState = createFeatureSelector<fromSearchWeather.State>(
  fromSearchWeather.searchWeatherFeatureKey
);
