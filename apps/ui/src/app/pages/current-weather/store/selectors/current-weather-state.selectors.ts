import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrentWeatherState from '../reducers/current-weather-state.reducer';

export const selectCurrentWeatherStateState = createFeatureSelector<fromCurrentWeatherState.State>(
  fromCurrentWeatherState.currentWeatherStateFeatureKey
);
